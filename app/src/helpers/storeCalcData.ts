import firestore from '@react-native-firebase/firestore';
import CryptoJS from 'crypto-js';
import { Results } from '../interfaces/form.interfaces';

interface Props {
  userId: string;
  results: Results[];
}
interface ResultData {
  id: string;
  data: Results[];
}

interface UserDocument {
  results: ResultData[];
}

const generateHash = (data: any): string => {
  return CryptoJS.SHA256(JSON.stringify(data)).toString();
};

const storeCalcData = async ({ userId, results }: Props) => {
  const response = {
    status: 0,
    message: ''
  };

  try {
    // Genera un hash único para cada objeto dentro de results
    const resultsWithHash = results.map(result => ({
      ...result,
      hash: generateHash(result)
    }));

    await firestore().runTransaction(async transaction => {
      const userDocRef = firestore().collection('calcs').doc(userId);
      const userDoc = await transaction.get(userDocRef);

      let existingResults: ResultData[] = [];
      if (userDoc.exists) {
        existingResults = userDoc.data()?.results || [];
      }

      // Verifica si algún objeto en resultsWithHash ya existe en existingResults
      const isDuplicate = resultsWithHash.some(newResult => 
        existingResults.some((existingResult: ResultData) => existingResult.id === newResult.hash)
      );

      if (isDuplicate) {
        response.status = 400;
        response.message = 'No puedes guardar el mismo cálculo dos veces';
        throw new Error(response.message); // Termina la transacción
      }

      // Agrega el nuevo conjunto de results al documento del usuario
      await transaction.set(
        userDocRef,
        { results: firestore.FieldValue.arrayUnion(...resultsWithHash) },
        { merge: true }
      );
    });

    response.status = 200;
    response.message = 'Tu cálculo fue guardado con éxito';
  } catch (error: any) {
    console.error('Error al almacenar los datos:', error);
    response.status = 500;
    response.message = error.message || 'Error desconocido';
  }

  return response;
};

export default storeCalcData;
