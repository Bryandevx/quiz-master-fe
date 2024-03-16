import * as React from "react";
import _ from "lodash";
import { Button as ChakraButton } from "@chakra-ui/react"; // Importa el componente Button de Chakra UI
// import { useNavigation } from "@react-navigation/native";
import { ButtonProps } from "../../types";
import { useTranslation } from "../../hooks";

const Button: React.FC<ButtonProps> = ({
  // link,
  text,
  style,
  disabled,
  loading,
  uppercase,
  variant = "solid",
  block = false,
  onClick,
  ...otherStyles
}) => {
  const { t } = useTranslation();
  // const navigation = useNavigation();

  const onFormat = uppercase ? _.upperCase : (value: string) => value;

  // const onNavigate = () =>
  //   navigation.navigate(
  //     link?.route!,
  //     link?.screen
  //       ? {
  //           screen: link.screen,
  //         }
  //       : undefined
  //   );

  return (
    <ChakraButton
      style={style}
      disabled={disabled}
      variant={variant}
      width={block ? "full" : undefined}
      onClick={onClick}
      isLoading={loading}
      {...otherStyles}
    >
      {loading ? "" : onFormat(t(text))}
    </ChakraButton>
  );
};

export default React.memo(Button, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
