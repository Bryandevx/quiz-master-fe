import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Sidebar, SearchBar } from "@/modules/navigation/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [showCommonComponents, setShowCommonComponents] = useState(true);

  useEffect(() => {
    const { pathname } = router;
    const isAuthPage =
      pathname.includes("/auth/login") || pathname.includes("/auth/register");
    setShowCommonComponents(!isAuthPage);
  }, [router]);

  return (
    <div style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      {" "}
      {showCommonComponents && <SearchBar /> && <Sidebar />}
      <div style={{ flexGrow: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;
