import * as React from "react";
import _ from "lodash";
import { Checkbox as ChakraCheckbox, Box } from "@chakra-ui/react"; // Importa los componentes de Chakra UI
import { Link, Typography } from "../../modules";
import { CheckboxProps } from "../../types";

const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  labels,
  name,
  error,
  value = false,
  onFormSetValue,
}) => {
  return (
    <ChakraCheckbox
      isDisabled={disabled}
      isChecked={value}
      isInvalid={!!error}
      value={name}
      colorScheme="gray"
      mb={8}
      onChange={(e) => onFormSetValue && onFormSetValue(e.target.checked)}
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap" pl={4}>
        {labels.map(({ text, link }, index) =>
          link ? (
            <Link key={`label-${index}`} to={link} text={text} mr={1} />
          ) : (
            <Typography key={`label-${index}`} path={text} mr={1} />
          )
        )}
      </Box>
    </ChakraCheckbox>
  );
};

export default React.memo(Checkbox, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
