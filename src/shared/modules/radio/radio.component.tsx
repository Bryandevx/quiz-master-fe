import React, { FC } from "react";

import _ from "lodash";

import { Radio as ChakraRadio, RadioGroup, Box } from "@chakra-ui/react";

import { Typography } from "@/shared/modules";

import { RadioProps } from "@/shared/types";

const Radio: React.FC<RadioProps> = ({
  value,
  name,
  options,
  onFormChange,
  onFormSetValue,
}) => {
  const accessLabel = `radio-${name}`;

  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={(nextValue) => onFormChange && onFormChange(nextValue)}
      aria-label={accessLabel}
    >
      {options.map((option) => (
        <Box
          key={option.value}
          mb={4}
          pl={4}
          shadow={1}
          padding={2}
          onClick={() => onFormSetValue && onFormSetValue(option.value)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: value === option.value ? 2 : 0,
          }}
        >
          {<Typography text={option.label} />}
          <ChakraRadio value={option.value} my={1} />
        </Box>
      ))}
    </RadioGroup>
  );
};

export default React.memo(Radio, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
