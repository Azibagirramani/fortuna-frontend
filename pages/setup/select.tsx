import { useState } from "react";
import { useRouter } from "next/router";
import { BsPerson, BsPeople } from "react-icons/bs";

import { useStore } from "@/store/index";

import BaseButton from "@/components/forms/BaseButton";

import SetLayout from "@/layouts/private/PrivateSetUp";
import AccountCard from "@/components/AccountCard";

import { post } from "@/core/firebase/methods/storage";

import type { AccountCardI } from "@/components/types";
import type { IAccount } from "@/core/types";

const AccountType = () => {
  const [selectedAccount, setAccount] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(true);
  const { store } = useStore();
  const router = useRouter();

  const selectedAccountType = (accountType: IAccount) => {
    setAccount(accountType);
  };

  // set check box
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerms(!e.target.checked);
  };

  // check if terms and account type is selected else disable button
  const isDisabled = () => {
    return !(selectedAccount && !terms);
  };

  // submit data
  const submitData = async () => {
    const data = {
      accountType: selectedAccount,
      terms: !terms,
    };
    const currentUser = store.userObj.uid;
    await post(`accounts/${currentUser}`, data);

    // redirect to next page
    router.push("/beta/setup/account");
  };

  const accountTypes = [
    {
      icon: <BsPerson size={50} />,
      label: "personal",
      disabled: true,
    },
    {
      icon: <BsPeople size={50} />,
      label: "business",
      disabled: true,
    },
  ] as AccountCardI[];
  return (
    <div className="mx-5 md:mx-12">
      <p className="">Select account type</p>
      <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
        {accountTypes.map((account, index) => {
          if (account.disabled) {
            return (
              <AccountCard
                key={index}
                handleClick={selectedAccountType}
                exClass={
                  account.label === selectedAccount
                    ? "bg-primary text-[white]"
                    : ""
                }
                label={account.label}
              >
                {account.icon}
              </AccountCard>
            );
          }
        })}
      </div>
      {!selectedAccount && (
        <span className="mt-5 text-sm text-[red]">
          Please select account type
        </span>
      )}

      <div className="mt-10 flex items-center gap-4">
        <input
          type="checkbox"
          id="terms"
          name="term"
          className="focus:ring-0"
          onChange={handleCheckBox}
        />
        <label htmlFor="term">
          {" "}
          I Accept terms and conditions{" "}
          {terms && <span className="mt-5 text-sm text-[red]">Required</span>}
        </label>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 md:flow-row justify-end items-center mt-10">
        <BaseButton
          exClass="text-[white] bg-primary text-white"
          disabled={isDisabled()}
          onClick={submitData}
        >
          Next
        </BaseButton>
      </div>
    </div>
  );
};

AccountType.getLayout = SetLayout;
export default AccountType;
