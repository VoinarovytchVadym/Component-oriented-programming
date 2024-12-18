import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  from: Yup.string()
    .required("Поле 'Звідки' є обов'язковим")
    .min(2, "Назва має містити щонайменше 2 символи"),
  where: Yup.string()
    .required("Поле 'Куди' є обов'язковим")
    .min(2, "Назва має містити щонайменше 2 символи"),
  weight: Yup.number()
    .typeError("Вага має бути числом")
    .positive("Вага має бути більше нуля")
    .required("Поле 'Вага' є обов'язковим"),
  size: Yup.number()
    .typeError("Розмір має бути числом")
    .positive("Розмір має бути більше нуля")
    .required("Поле 'Розмір' є обов'язковим"),
  price: Yup.number()
    .typeError("Ціна має бути числом")
    .positive("Ціна має бути більше нуля")
    .required("Поле 'Ціна' є обов'язковим"),
});
