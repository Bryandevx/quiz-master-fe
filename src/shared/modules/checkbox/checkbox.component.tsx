import React, { FC } from "react";

import _ from "lodash";

import { Checkbox as ChakraCheckbox, Box } from "@chakra-ui/react";

import { Typography } from "@/shared/modules";

import { CheckboxProps } from "@/shared/types";

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
        {labels.map(({ text }, index) => (
          <Typography key={`label-${index}`} />
        ))}
      </Box>
    </ChakraCheckbox>
  );
};

export default React.memo(Checkbox, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
