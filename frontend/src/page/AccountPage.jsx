import Account from "../component/layout/accountPage/accountSetting/Account";
import { Seo } from "../../utils/SEO/SEO";

function AccountPage() {
  return (
    <>
      <Seo
        title="Account | Velora"
        description="Manage your Velora profile, addresses, and payment methods. Developed by Omid Teimory."
        robots="noindex,nofollow"
      />
      <Account />
    </>
  );
}

export default AccountPage;
