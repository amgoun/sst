import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

// Customer portal link
const customerPortalLink = "https://amgounstudio.lemonsqueezy.com/billing";

const ButtonCustomerPortal = async () => {
  const authenticated = await currentUser();

  const userEmail = authenticated?.emailAddresses[0];
  console.log("email is", userEmail);

  if (authenticated) {
    return (
      <a
        href={customerPortalLink + "?prefilled_email=" + userEmail}
        className="btn"
      >
        Billing
      </a>
    );
  }

  return (
    <button className="btn">
      <SignedIn />
    </button>
  );
};

export default ButtonCustomerPortal;
