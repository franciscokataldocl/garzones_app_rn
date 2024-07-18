import { create } from 'zustand';
import { Field, Form } from '../../interfaces/form.interfaces';

const initialFormState: Form = {
  form_name: '',
  form_date: '',
};

const initialFieldsState: Field[] = [];

interface FormState {
  form: Form,
  fields: Field[],
  addField: (field: Omit<Field, 'position'>) => void,
  addFormData: (form: Form) => void,
}

const useFormStore = create<FormState>()((set) => ({
  form: initialFormState,
  fields: initialFieldsState,
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
})
);

export default useFormStore;
