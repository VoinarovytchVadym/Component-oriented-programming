import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "../validators/formValidationSchema";
import "./Form.scss";

import packagePng from "../../src/images/package.png";
import documentPng from "../../src/images/document.png";
import letterPng from "../../src/images/letter.png";

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formValidationSchema) });

  const [deliveryType, setDeliveryType] = useState("");

  const handleDeliveryTypeChange = (type) => {
    setDeliveryType(type);
    setValue("deliveryType", type);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="deliveryType">
        <a className="selected">В межах країни</a>
        <a>За кордоном</a>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="route">
          <h3 className="fieldLabel">1. Маршрут</h3>
          <div className="fields">
            <div className="field fromDiv">
              <label htmlFor="from">Звідки</label>
              <input
                type="text"
                name="from"
                id="from"
                {...register("from")}
                placeholder="Введіть назву населенного пункту"
                required
              />
              {errors.from && <p className="error">{errors.from.message}</p>}
            </div>
            <div className="field whereDiv">
              <label htmlFor="where">Куди</label>
              <input
                type="text"
                name="where"
                id="where"
                {...register("where")}
                placeholder="Введіть назву населенного пункту"
                required
              />
              {errors.where && <p className="error">{errors.where.message}</p>}
            </div>
          </div>
        </fieldset>

        <fieldset className="packageType">
          <h3 className="fieldLabel">2. Тип відправлення</h3>
          <div className="fields">
            <div
              className={`field packageDiv ${
                deliveryType === "Посилка" ? "selected" : ""
              }`}
              onClick={() => handleDeliveryTypeChange("Посилка")}
            >
              <img src={packagePng} alt="Package" />
              <div className="imageLabel">Посилка</div>
            </div>
            <div
              className={`field documentDiv ${
                deliveryType === "Документи" ? "selected" : ""
              }`}
              onClick={() => handleDeliveryTypeChange("Документи")}
            >
              <img src={documentPng} alt="Document" />
              <div className="imageLabel">Документи</div>
            </div>
            <div
              className={`field letterDiv ${
                deliveryType === "Лист" ? "selected" : ""
              }`}
              onClick={() => handleDeliveryTypeChange("Лист")}
            >
              <img src={letterPng} alt="letter" />
              <div className="imageLabel">Лист</div>
            </div>
          </div>
          <input
            type="hidden"
            {...register("deliveryType")}
            value={deliveryType}
          />
        </fieldset>
        <fieldset className="deliveryOptions">
          <h3 className="fieldLabel">3. Параметри відправлення</h3>
          <div className="fields">
            <div className="field weigthDiv">
              <label htmlFor="weight">Вага, кг</label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="кг"
                required
                {...register("weight")}
              />
              {errors.weight && (
                <p className="error">{errors.weight.message}</p>
              )}
            </div>
            <div className="field sizeDiv">
              <label htmlFor="size">Максимальна сторона, см</label>
              <input
                type="number"
                name="size"
                id="size"
                placeholder="см"
                required
                {...register("size")}
              />
              {errors.size && <p className="error">{errors.size.message}</p>}
            </div>
            <div className="field priceDiv">
              <label htmlFor="price">Оголошена вартість, грн</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="грн"
                required
                {...register("price")}
              />
              {errors.price && <p className="error">{errors.price.message}</p>}
            </div>
          </div>
          <div className="fields options">
            <label>
              <input type="checkbox" {...register("Courier call")} />
              Виклик кур'єра
            </label>
            <label>
              <input type="checkbox" {...register("Delivery by courier")} />
              Доставка кур'єром
            </label>
            <label>
              <input type="checkbox" {...register("SMS about receipt")} />
              СМС про отримання
            </label>
            <label>
              <input
                type="checkbox"
                {...register("Recommended service notice")}
              />
              Рекомендоване повідомлення про вручення
            </label>
            <label>
              <input
                type="checkbox"
                {...register("Return delivery of documents")}
              />
              Зворотна доставка документів
            </label>
          </div>
        </fieldset>

        <fieldset className="submit">
          <div className="fields">
            <div className="field submitButton">
              <button type="submit" className="submit-button">
                Розрахувати вартість
              </button>
            </div>
            <div className="field description">
              * Під час розрахунку ви отримаєте приблизну вартість відправлення.
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
