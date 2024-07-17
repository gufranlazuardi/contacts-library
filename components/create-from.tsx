"use client";

import { saveContact } from "@/lib/action";
import { useFormState } from "react-dom";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <div className="mb-5">
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium">
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name..."
            className="bg-grey-300 text-gray-700 border-gray-400 rounded-sm focus:ring-blue-500 focus-within:border-blue-400 block w-full p-2.5"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.name}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium"
          >
            Phone number
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone number..."
            className="bg-grey-300 text-gray-700 border-gray-400 rounded-sm focus:ring-blue-500 focus-within:border-blue-400 block w-full p-2.5"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.phone}
            </p>
          </div>
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">
            {state?.message}
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
