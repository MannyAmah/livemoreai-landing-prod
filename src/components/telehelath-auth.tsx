import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TelehealthConsentForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Telehealth Consent Form</h1>
      <ScrollArea className="pr-4">
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            I understand that Telehealth is a mode of delivering health care
            services via communication technologies (e.g., internet or
            cellphone) to facilitate diagnosis, consultation, treatment,
            education, care management, and self-management of a patient’s
            health care.
          </p>

          <p>
            By acknowledging my consent below, I understand and agree to the
            following:
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              I understand that Junction and affiliate Openloop Healthcare
              Partners, PC offer Telehealth consultations, which are conducted
              through videoconferencing, telephonic, and asynchronous technology
              and my Telehealth provider will not be present in the room with
              me.
            </li>
            <li>
              I understand there are potential risks to the use of Telehealth
              technology, including but not limited to, interruptions, delays,
              unauthorized access, and or other technical difficulties. I
              understand that either my Telehealth provider or I can discontinue
              the Telehealth appointment if the technical connections are not
              adequate for my visit.
            </li>
            <li>
              I understand that I could seek an in-office visit rather than
              obtain care from a Telehealth provider, and I am choosing to
              participate in a Telehealth consultation with Junction, an
              affiliate of Openloop Healthcare Partners, PC, Openloop Healthcare
              Partners California, PC, Openloop Healthcare Partners Colorado,
              PC, Openloop Healthcare Partners New Jersey, PC, Openloop
              Healthcare Partners Wisconsin SC, Reliant.MD Medical Associates,
              PLLC, Reliant.MD Medical Associates California, PC, Reliant.MD
              Medical Associates Colorado, PC, Reliant.MD Medical Associates New
              Jersey, PC, Reliant.MD Medical Associates Wisconsin, SC, MECNB
              Physician Services, PC, MECNB Physician Services California, PC,
              MECNB Physician Services Colorado, PC, MECNB Physician Services
              New Jersey, PC, and MECNB Physician Services, SC.
            </li>
            <li>
              To protect the confidentiality of my health information, I agree
              to undertake my Telehealth consultation in a private location, and
              I understand that my Telehealth provider will similarly be in a
              private location.
            </li>
            <li>
              I understand that I am responsible for payment of any amounts due
              and owing resulting from my Telehealth visit.
            </li>
            <li>
              In an emergent situation, I understand that the responsibility of
              my Telehealth provider may be to direct me to emergency medical
              services, such as an emergency room.
            </li>
          </ol>

          <p className="pt-4 font-semibold">
            By acknowledging below, I certify:
          </p>
          <ul className="list-disc list-inside pl-2 space-y-1">
            <li>That I have read this form and/or had it explained to me</li>
            <li>
              That I understand the risks and benefits of a Telehealth
              appointment
            </li>
            <li>
              That I have been given the opportunity to ask questions and that
              such questions have been answered to my satisfaction.
            </li>
          </ul>

          <p className="pt-2 italic">Effective as of February 21, 2023</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TelehealthConsentForm;
