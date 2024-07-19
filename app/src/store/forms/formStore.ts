import { create } from 'zustand';
import { Field, Form, Results } from '../../interfaces/form.interfaces';

const initialFormState: Form = {
  form_name: '',
  form_date: '',
};

const initialFieldsState: Field[] = [];
const initialResultsState: Results[] = [];

export interface FormState {
  form: Form;
  fields: Field[];
  results: Results[];
  addField: (field: Omit<Field, 'position'>) => void;
  addFormData: (form: Form) => void;
  addResultsData: (results: Results[]) => void;
  reset: () => void;
}

const useFormStore = create<FormState>((set) => ({
  form: initialFormState,
  fields: initialFieldsState,
  results: initialResultsState,
  addField: (field: Omit<Field, 'position'>) => set((state) => {
    const newPosition = state.fields.length > 0
      ? state.fields[state.fields.length - 1].position + 1
      : 0;

    const newField = { ...field, position: newPosition };

    return {
      fields: [...state.fields, newField]
    };
  }),
  addFormData: (form: Form) => set((state) => ({
    form: { ...state.form, ...form }
  })),
  addResultsData: (data: Results[]) => set((state) => ({ results: data })),
  reset: () => set({
    form: initialFormState,
    fields: initialFieldsState,
    results: initialResultsState
  }),
}));

export default useFormStore;
