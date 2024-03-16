import * as React from "react";
import _ from "lodash";
import { Formik, FormikConfig, FormikValues } from "formik"; // Asegúrate de importar FormikConfig y FormikValues

import { Button, Checkbox, Field, Radio } from "../../../shared/modules";
import { useTranslation } from "../../hooks";
import { DictionaryService } from "../../services";
import { FormField, FormProps } from "../../types";

// Añade una restricción al tipo genérico T para que extienda FormikValues
const Form = <T extends FormikValues>({
  children,
  fields,
  initialValues,
  validation,
  onSubmit,
}: React.PropsWithChildren<FormProps<T>>) => {
  const { t } = useTranslation();

  const validationSchema: any = validation ? validation(t) : undefined;

  const handleSubmit = async (values: T) => {
    console.log("CLICKED!!!");
    try {
      onSubmit(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) =>
        !fields && children && typeof children === "function" ? (
          children({
            handleChange: formik.handleChange,
            handleSubmit: formik.handleSubmit,
            values: formik.values,
          })
        ) : (
          <>
            {fields?.map((field) => {
              if (field.type === "submit") {
                return (
                  <Button
                    {...field.props}
                    key="submit"
                    onClick={formik.handleSubmit}
                  />
                );
              }
              const { name } = field.props;
              const key = name.toString();
              const value = formik.values[name];
              const isTouched = formik.touched[name];
              const error = isTouched
                ? formik.errors[name]?.toString()
                : undefined;

              const props: FormField = {
                key,
                value,
                error,
                name: key,
                onFormChange: formik.handleChange(name),
                onFormSetValue: (value) => formik.setFieldValue(key, value),
              };

              if (field.type === "checkbox")
                return <Checkbox {...field.props} {...props} />;

              if (field.type === "radio")
                return <Radio {...field.props} {...props} />;

              return <Field {...field.props} {...props} />;
            })}
            {children && children}
          </>
        )
      }
    </Formik>
  );
};

export default React.memo(Form, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
}) as <T extends FormikValues>(
  props: React.PropsWithChildren<FormProps<T>>
) => JSX.Element;
