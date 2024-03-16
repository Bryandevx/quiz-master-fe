import * as React from "react";
import _ from "lodash";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon as ChakraIcon,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react"; // Importa los componentes de Chakra UI
import { useTranslation } from "../../hooks";
import { FieldProps } from "../../types";

const Field: React.FC<FieldProps> = ({
  value,
  disabled,
  error,
  label,
  placeholder,
  leftAddonText,
  secureTextEntry,
  onFormChange,
}) => {
  console.log("Props:", {
    value,
    disabled,
    error,
    label,
    placeholder,
    leftAddonText,
    secureTextEntry,
    onFormChange,
  });
  const { t } = useTranslation();
  const colorPalette = {
    muted: { 400: "#718096" },
  };
  const [isTextEntrySecure, setIsTextEntrySecure] =
    React.useState(secureTextEntry);

  const toggleVisibilityOff = React.useCallback(
    () => setIsTextEntrySecure((isTextEntrySecure) => !isTextEntrySecure),
    []
  );

  return (
    <FormControl mb={8} isInvalid={!!error}>
      <FormLabel>{label && t ? t(label) : ""}</FormLabel>
      <InputGroup>
        <Input
          size="lg"
          isDisabled={disabled}
          autoCapitalize="none"
          // isInvalid={!!error}
          value={value}
          onChange={(e) => onFormChange && onFormChange(e.target.value)}
          placeholder={placeholder && t ? t(placeholder) : ""}
          type={isTextEntrySecure ? "password" : "text"}
        />
        {secureTextEntry && (
          <InputRightElement
            color={colorPalette.muted[400]}
            children={
              <ChakraIcon
                name={isTextEntrySecure ? "view-off" : "view"}
                onClick={toggleVisibilityOff}
              />
            }
          />
        )}
        {leftAddonText && (
          <InputLeftElement color={colorPalette.muted[400]}>
            {t(leftAddonText)}
          </InputLeftElement>
        )}
      </InputGroup>
      <FormErrorMessage mt={1}>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default React.memo(Field, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
