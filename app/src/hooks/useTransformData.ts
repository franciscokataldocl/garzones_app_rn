import { actionSymbols, unitySymbols } from "../helpers/math";

interface DataItem {
  action: string;
  name: string;
  position: number;
  unity: string;
  value: string; // value should be a string
}

interface ResultItem {
  position: number;
  name: string;
  value: string; // Ajustado a string
  action: string;
  unity: string;
}

const useTransformData = (data: DataItem[]): ResultItem[] => {
  // Sort the array by position
  data.sort((a, b) => a.position - b.position);

  // Start with the initial value
  const initialValue = parseFloat(data[0].value);
  let result = initialValue;

  // Array to hold the results
  const resultArray: ResultItem[] = [{
    position: data[0].position,
    name: data[0].name,
    value: initialValue.toString(),
    action: data[0].action,
    unity: data[0].unity,
  }];

  for (let i = 1; i < data.length; i++) {
    const { action, name, value, unity } = data[i];
    const numericalValue = parseFloat(value);
    const actionSymbol = actionSymbols[action] || '';
    const unitySymbol = unitySymbols[unity] || '';

    let subtractionAmount = 0;
    let detailItem: ResultItem | null = null;

    switch (action) {
      case 'SUMAR':
        if (unity === 'PORCENTAJE') {
          const percentage = numericalValue / 100;
          const addition = initialValue * percentage;
          result += addition;
          detailItem = {
            position: i + 0.1,
            name: `${numericalValue}${unitySymbol} ${name} = ${Math.round(addition).toString()}`,
            value: Math.round(addition).toString(),
            action: 'DETAIL',
            unity: unity,
          };
        } else {
          result += numericalValue;
        }
        break;
      case 'RESTAR':
        if (unity === 'PORCENTAJE') {
          const percentage = numericalValue / 100;
          subtractionAmount = result * percentage;
          result -= subtractionAmount;
          detailItem = {
            position: i + 0.1,
            name: `${numericalValue}${unitySymbol} ${name}`,
            value: Math.round(subtractionAmount).toString(),
            action: 'DETAIL',
            unity: unity,
          };
        } else {
          result -= numericalValue;
        }
        break;
      case 'MULTIPLICAR':
        result *= numericalValue;
        break;
      case 'DIVIDIR':
        result /= numericalValue;
        break;
      default:
        break;
    }

    // Add the main result item
    resultArray.push({
      position: i,
      name: `${data[0].name} ${actionSymbol} ${name} (${numericalValue}${unitySymbol})`,
      value: Math.round(result).toString(),
      action: action,
      unity: unity,
    });

    // Add the detail item if it's defined
    if (detailItem) {
      resultArray.push(detailItem);
    }

    // Update the result for output
    result = parseFloat(result.toFixed(0));
  }

  // Convert resultArray to the expected format
  return resultArray;
};

export default useTransformData;
