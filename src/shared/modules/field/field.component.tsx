import * as React from "react";
import _ from "lodash";
import { Icon } from "@/shared/modules";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useTranslation } from "@/shared/hooks";
import { FieldProps } from "@/shared/types";

const Field: React.FC<FieldProps> = ({
  icon,
  value,
  disabled,
  error,
  label,
  placeholder,
  leftAddonText,
  secureTextEntry,
  onFormChange,
}) => {
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
          value={value}
          onChange={(e) => onFormChange && onFormChange(e.target.value)}
          placeholder={placeholder && t ? t(placeholder) : ""}
          type={isTextEntrySecure ? "password" : "text"}
        />
        {secureTextEntry && (
          <InputRightElement
            color={colorPalette.muted[400]}
            children={<Icon name={icon} size="24px" color="green.500" />}
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
