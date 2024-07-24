"use client";

import { updateContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./custom-button";
import type { Contact } from "@prisma/client";

// interface UpdateFormProps {
//   contact: {
//     contact: Contact;
//   };
// }

const UpdateForm = ({ contact }: { contact: Contact }) => {
  const updateContactWithId = updateContact.bind(null, contact.id);

  // tipe data Contact ngambil type dari "Contact" Prisma biar lebih type safety
  const [state, formAction] = useFormState(updateContactWithId, null);

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
            defaultValue={contact.name}
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
            defaultValue={contact.phone}
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
        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
