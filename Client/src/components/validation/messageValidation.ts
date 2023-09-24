import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

interface MyFormData {

  message: string; 
}

const validationSchema: ObjectSchema<MyFormData> = Yup.object().shape({
  
  message: Yup.string() 
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .required('...'),
  
});

export default validationSchema;
