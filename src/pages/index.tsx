import { useEffect } from "react";

import { GlobalRoute, AppScreen } from "@/shared/constants";

import { useNavigation } from "@/shared/hooks";

export default function Home() {
  const navigate = useNavigation();

  useEffect(() => {
    let routeLink = {
      route: GlobalRoute.APP,
      screen: AppScreen.HOME,
    };
    console.log(routeLink);
    navigate.push(routeLink);
  }, []);

  return <></>;
}
