import React from "react";

const TermsAndConditionsContent: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        TERMS AND CONDITIONS
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Please read these platform terms of use ("<strong>Agreement</strong>") carefully because
        it is a binding contract between the user that accepts this Agreement
        ("<strong>User</strong>") and Rhyno Financial Inc., a Alberta, Canada company ("<strong>ryno</strong>"),
        authorised and regulated by Financial Transactions and Reports Analysis
        Centre (FINTRAC) as a Money Service Business (MSB) Registration Number
        C100000021, governing User use of the services available through the
        ryno website at{" "}
        <a className="underline text-blue-600 dark:text-blue-400" href="https://www.rynopay.io">
          https://www.rynopay.io
        </a>{" "}
        ("<strong>Site</strong>") through which they may be made available (the "<strong>Services</strong>"). By
        checking an opt-in box, clicking on "I Accept" or otherwise accepting
        this Agreement on the sign-up page, or otherwise accessing or using the
        Services, User acknowledges that they have read, understood, and agree
        to be bound by and comply with the terms of this Agreement. If User is
        using the Services on behalf of an entity, partnership, or other
        organization, then User represents that they:
      </p>

      <div className="ml-6 mb-6">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          (i) are an authorized representative of that entity with the authority
          to bind that entity to this Agreement and;
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          (ii) such entity agrees to be bound by this Agreement. If User does not
          agree to the terms of this Agreement, then they are not permitted to use
          the Services.
        </p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          ARBITRATION NOTICE:
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Except for certain kinds of disputes described in the Arbitration
          provision below, User agrees that disputes arising under this
          Agreement will be resolved by binding individual arbitration, and{" "}
          <span className="font-bold">
            BY ACCEPTING THIS AGREEMENT, User AND ryno ARE EACH WAIVING THE
            RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
            REPRESENTATIVE PROCEEDING.
          </span>{" "}
          User AGREES TO GIVE UP User RIGHT TO GO TO COURT to assert or defend
          User rights under this contract (except for matters that may be
          taken to small claims court). Your rights will be determined by a
          single ARBITRATOR and NOT a judge or jury. See the Arbitration
          provision below.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          BANKING AND FINANCIAL SERVICES:
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ryno is not a bank and does not itself provide any banking services.
          ryno Services are, however, integrated with certain third party
          servicers, that we call Third Party Servicers. By applying to open a
          deposit account or other financial services account with a Third Party
          Servicer through the Services, User also hereby agrees to the
          following with each of the following Third Party Servicers:
        </p>
        <div className="space-y-2">
          <a
            href="https://noah.com/en/terms-of-service?terms=us"
            className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://noah.com/en/terms-of-service?terms=us
          </a>
          <a
            href="https://zenus.com/en/group/legal-documents/website-terms-of-use"
            className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://zenus.com/en/group/legal-documents/website-terms-of-use
          </a>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          The Third Party Servicer Agreements and disclosures listed above are incorporated into this Agreement and form part of this Agreement. ryno recommends that you print a copy of this Agreement and each of the above Third Party Servicer Agreements for your records. If not defined in the body of this Agreement, capitalized terms used in this Agreement are defined in the glossary at the end of this Agreement.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Services
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Services consist of cloud-based (i) financial information storage
          and reporting; and (ii) the service of communicating information to,
          from and among Third Party Servicers, as per User instructions. User
          may make certain selections of Services that they wish to procure
          through the Application or the Account. ryno will provide the Services
          to User for the term of this Agreement, subject to the payment of
          applicable Fees and compliance with the terms of this Agreement. As
          part of the Services, ryno hereby grants to User a non-exclusive,
          non-transferable, non-assignable right to use the Services, as per the
          terms of this Agreement. User acknowledges that the Services are
          cloud-based and hosted services and no copies of the Services or ryno
          platform will be delivered to User. The Services shall be used by User
          solely for User own purposes and ryno does not convey any right, title
          or interest in the Services or ryno platform to User. User right to
          use the Services shall terminate upon any termination of this
          Agreement or any suspension or termination of the supply of the
          Services to User.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Financial Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall not perform any financial transactions for User. User may,
          however, use the Services to communicate User instructions to a Third
          Party Servicer of User which Third Party Servicer may perform a
          financial transaction on behalf of User pursuant to the Third Party
          Servicer Agreement. For example, if User opens a bank account with a
          Third Party Servicer that is a bank, then a data Transaction through
          the Services may result in a financial transaction within the User
          account with the Third Party Servicer pursuant to the applicable Third
          Party Servicer Agreement. ryno is not liable for any such financial
          transaction or the results thereof.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Remittance Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, certain
          Third Party Servicers may offer remittance or money transfer services,
          to include cross-border payment solutions utilizing stablecoins under
          their respective terms. Where such services are available, the
          Services will enable User to deliver instructions to the Third Party
          Servicer to initiate a remittance transaction. Such transactions will
          result in funds in User's Financial Account being applied to the
          remittance transaction as per User instructions to the Third Party
          Servicer delivered by way of ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Foreign Exchange Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, by carrying out a remittance transaction from one Third Party Servicer (e.g. a US bank) to another (e.g. a Kenyan Bank), User may be able to cause a given balance of funds to be converted from one currency to another. ryno does not itself carry out such transactions. They are, instead, carried out by Third Party Servicers. Pursuant to User Transaction instructions supplied through ryno, the Third Party Servicer holding the funds of a currency that User wishes to sell will transfer them to the User's Financial Account at another Third Party Servicer that maintains a Financial Account for the User in another currency. The currency conversion takes place in the course of the remittance transaction from one Third Party Servicer to another.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Bill Payment Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If User has a supplier they wish to pay, as and where available indicated in disclosure in the Account, User may be able to use the Services to instruct a Third Party Servicer to initiate a payment to the supplier.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Payment Processing Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If made available to the User, ryno or one of its Affiliates may provide Payment Processing Services, meaning serving as an agent of the User to receive funds for the User from a Client of the User. Payment Processing Services are supplied under a separate agreement, the Payment Processing Terms which are posted at the Site and incorporated herein by reference.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Combined Financial Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, User may be able to supply instructions to Third Party Servicers to remit funds to another Third Party Servicer, convert the funds to another currency in the course of such remittance and also pay a supplier invoice.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Restrictions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Each financial transaction initiated through the Services is subject to restrictions as discussed herein and other disclosure in the Account. Certain transactions are not permitted, not possible or may be delayed, reversed or cancelled without prior consent of the User at the sole discretion of Third Party Servicers and ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Errors
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User shall immediately notify ryno of any errors by ryno, a Third Party Servicer or User in the supply or use of the Services. Where practicable, ryno shall use commercially reasonable efforts to investigate errors, but makes no representation as to its ability to correct the error. User shall provide ryno with any information necessary to investigate an error in a Transaction. Some payment transactions, such as wire transfers, are irreversible, so User agrees to exercise extreme caution when initiating any financial transaction by way of instructions delivered one of its Third Party Servicers through the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          2. ryno Account and User ID
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall provide User with a unique and private Account accessible through the Service. The Account shall be a record of User Transactions and Fees. ryno shall provide User with access codes for the Account. User shall not disclose such codes or permit any third party to use them. User has exclusive responsibility for the use of User Account. ryno will invite User to enter certain preferences and specifications within the Application or the Account that will apply to the Services; User assumes exclusive responsibility for such selections even if they contain errors by User or result in losses to User. Any additional terms and conditions posted to the Site with respect to the Account or specific Services preferences selected by User are incorporated herein by reference.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Except as required to deliver the Services or as otherwise required by law, ryno shall not grant any third party access to User Account. User shall notify ryno by email to compliance@rynopay.io immediately of any loss or disclosure, whether voluntary or otherwise, of any Account password or access code to a third party.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Upon User's request, ryno will also issue User a User ID associated with the Account ("User ID"). User may share their User ID only with officers, directors, bookkeepers, accountants or other User personnel that are directly employed or engaged by User ("User Personnel") provided that User binds such third parties to undertakings of confidentiality and to also honor the terms hereof. User Personnel may only access and use the Services through the User ID and in compliance with this Agreement; User will not allow User Personnel to share the User ID with third parties. User is responsible for all activity occurring under its User ID whether by User Personnel or otherwise. ryno reserves the right to replace the User ID in its sole discretion for any reason or for no reason. Any User Personnel who accesses the Services does so subject to this Agreement.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User shall provide, at User's own expense, all necessary hardware, applications and internet connectivity necessary to access the Services. User acknowledges that the internet can be unpredictable in performance, unsecure and may, from time to time, impede access to the Services or performance hereunder. User agrees that ryno is not responsible for any internet outages, unsecure WIFI or other connections or any other interference with User's use of or access to the Services or security breaches arising from any User Device and User waives any and all claims against ryno in connection therewith.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          3. Limitations
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Prohibited Users
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The following Persons are prohibited from using the Services:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) Persons who appear on the U.S. Department of the Treasury, Office of Foreign Assets Control (OFAC), Specially Designated Nationals List (SDN);
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) persons designated as sectioned by Nigeria Sanctions Committee including but not those designated as such under the Terrorism (Prevention and Prohibition) Act, 2022 (Nigeria);
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iii) Persons who are less than 18 years of age;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iv) Persons, or their Affiliates who have procured services from ryno and have been terminated for cause by ryno; and
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (v) individual consumers. The Services may not be used for individual consumer use. User must be a business, charitable organization or not-for-profit organization to use the Services. ryno reserves the right to decline to provide Services or terminate Services to one or another type of business; ryno shall notify User of prohibited business types through the Site, the Account or the App. In any case, any business that is illegal or operates in support of illegal activity is prohibited from using the Services.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Limitations on Use
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          User shall not itself and shall not permit any User Personnel or any other third party to:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) permit any party to access or use the Services other than the User Personnel authorized under this Agreement;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) modify, adapt, alter or translate any software of ryno platform underlying the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iii) license, lease, rent, loan, distribute, or otherwise transfer the Services to any third party;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iv) except if, and solely to the extent that, such a restriction is impermissible under Law, reverse engineer, decompile, disassemble, or otherwise derive or determine or attempt to derive or determine the source code (or algorithms, structure or organization) of any software or ryno platform underlying the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (v) use or copy the any software or ryno platform underlying the Services except as expressly allowed hereunder;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vi) conduct or promote any illegal activities while using the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vii) use the Services to generate unsolicited email advertisements or spam;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (viii) use the Services to stalk, harass or harm another individual;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ix) use any high volume automatic, electronic or manual process to access, search or harvest information from the Services (including without limitation robots, spiders or scripts);
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (x) except if, and solely to the extent that, such a restriction is impermissible under Law, interfere in any way with the proper functioning of the Services or interfere with or disrupt any servers or networks connected to the Services, or disobey any requirements, procedures, policies or regulations of networks connected to the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xi) attempt to gain access to secured portions of the Services to which it does not possess access rights;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xii) upload or transmit any form of virus, worm, Trojan horse, or other malicious code;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xiii) use any robot, spider, other automatic device, or manual process to extract, "screen scrape", monitor, "mine", or copy any static or dynamic web page on the Services or the content contained on any such web page for commercial use without our prior express written permission;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xiv) impersonate any person or entity, or otherwise misrepresent its affiliation with a person or entity;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xv) mirror or frame the Services or any content, place pop-up windows over its pages, or otherwise affect the display of its pages; or
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xvi) publicly display or publicly perform any part of the Services.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User may not use the Services for any purpose other than a purpose for which the Services are expressly designed. If User is prohibited under Laws from using the Services, User may not use them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          4. ryno Intellectual Property Rights
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno expressly reserves all Intellectual Property Rights in the Services, ryno platform and all materials provided by ryno hereunder. All right, title and interest in the Services and all other materials provided by ryno hereunder, any update, adaptation, translation, customization or derivative work thereof, and all Intellectual Property Rights therein will remain with ryno or its licensors. ryno reserves the right, in its sole discretion, to change, modify, add, or remove portions of the Services without prior notice to User or consent of User. Certain of the names, logos, trademarks, trade names, service marks, content, visual interfaces, interactive features, information, compilation, computer code, products, services, and other materials displayed on the Services ("ryno Materials"), are protected by Intellectual Property Rights Laws of the United States, Canada, and other jurisdictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          5. User Data Consent
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User hereby authorizes ryno to, directly or through third parties, make any inquiries and conduct any investigation to verify User identity.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Services requires certain information concerning User, including but not limited to User name, address, phone number, email address, Financial Account information and other Third Party Servicer account information. User agrees that all information it provides to ryno shall be complete and accurate and User shall promptly correct any errors in the information provided to ryno.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Subject to the ryno Privacy Policy, posted at{" "}
          <a href="https://www.rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
            https://www.rynopay.io
          </a>{" "}
          User and each of User Personnel hereby grant ryno the right to collect, store, use and disclose User Data for the purpose of providing the Services and its integration with Third Party Servicer Services selected by User. Where User Data includes data concerning third parties, User states that it has obtained the necessary consents for ryno to collect, process, store such data hereunder from the relevant data subjects. Data collected by ryno is subject to the ryno Privacy Policy, posted at the Site and incorporated herein by reference. Subject to Law, where ryno is subject to a subpoena request for User Data, ryno shall provide User with an opportunity to contest the request, failing which ryno shall cooperate with the request.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User hereby authorizes ryno and each Third Party Servicer to each obtain from the others and disclose to the others User Data in so far as is necessary to supply their respective services either hereunder or under their respective Third Party Servicer Agreements.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Where required by Law, ryno will disclose User Data to law enforcement agencies. ryno reserves the right to keep User Data for the term of this Agreement and for five (5) years thereafter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          6. User Data
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Accuracy
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User has sole responsibility for the accuracy, appropriateness and completeness of all User Data. ryno will use the User Data it is provided in performing the Services and is not responsible for reviewing, validating or otherwise confirming the accuracy, appropriateness or completeness of User Data.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Security
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno will take reasonable steps to help protect User Data. However, User understands and agrees that such steps do not guarantee that the Services are invulnerable to all security breaches or immune from viruses, security threats or other vulnerabilities. ryno reserves the right to cooperate with local, state and federal authorities in investigations of improper or unlawful activities and this may require the disclosure of User's personal information. ryno may also report to other organizations about improper or unlawful user activities and this reporting may include disclosure of personal information relating to those individuals conducting such improper or unlawful activities. User shall secure User Data in its possession or under its control. User assumes exclusive responsibility for ensuring the security of User Device and the Data on it. ryno is not liable for the operation or failure of User Devices or those of any third party, including but not limited to processors, hosting services, internet service providers and other Third Party Servicers. User shall not operate User Device in a manner that does not meet the applicable security requirements of ryno, indicated in the Account or on the Site, or those of Third Party Servicers.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno is not responsible for performing, and is not liable for any failure to perform, any back-up of any User Data or other data provided, transmitted, processed, or stored by User in or through the Services. It is User's responsibility to back-up onto a User Device all User Data, including all data and records that User submits to ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Sharing
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall disclose User Data to those representatives of User identified by User for such purposes and also to such Third Party Servicers as User has selected. ryno has no liability for any collection, processing, storage, use or disclosure of User Data by any Third Party Servicer or any other third party. ryno reserves the right to decline to share User Data with any third party where ryno believes that such sharing may expose User or ryno to excessive security, financial or reputational risk, provided however that ryno shall never be liable for any act or omission of any third party with respect to User Data or otherwise. ryno makes no warranty, representation, endorsement, or guarantee regarding, and accepts no responsibility or liability for, the quality, content, nature, veracity or reliability of any User Data.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Feedback
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          In the event that User provides ryno any ideas, thoughts, criticisms, suggested improvements or other feedback related to the Services (collectively "Feedback"), User agrees that ryno may use the Feedback to modify the Services and that User will not be due any compensation, including any royalty related to the product or service that incorporates the Feedback. User hereby grants ryno a worldwide, royalty-free, fully paid, perpetual, irrevocable license to use, reproduce, modify, translate, distribute, perform, display, import, sell, offer for sale, make, have made and otherwise exploit the Feedback in any form, media, or technology, whether now known or hereafter developed, and to allow others to do the same. This is true whether User provides the Feedback on the Services or through any other method of communication with ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Limitations
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          User shall not take possession of or enter into the Account any data:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) that User does not have the lawful right to copy, transmit, distribute, and display (including any User Data that would violate any confidentiality or fiduciary obligations that User might have with respect to the User Data);
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) for which User does not have the consent or permission from the owner of any personally identifiable information contained in the User Data;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iii) that infringes, misappropriates or otherwise violates any Intellectual Property Rights or violates any privacy rights of any third party;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iv) that is false or misleading;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (v) that is defamatory, obscene, or offensive;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vi) that violates, or encourages any conduct that would violate, any Laws or regulation or would give rise to civil or criminal liability; or
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vii) that contains any viruses, trojan horses, spyware, malware, worms, time bombs, cancelbots, or other disabling devices or other harmful component intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Financial Data Storage, Not Advice
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Focused on financial transaction information processing, the Services shall enable the storage of User Data that is of a financial nature. User acknowledges, however, that the Services provided under this Agreement do not include the supply of any accounting, financial, investment, legal or other professional advice. ryno is not an accounting or other professional services firm. ryno does not hold any licenses for the supply of any accounting, financial, investment, legal or other professional advice and none of the Services shall be construed as including any such services. Data presented in the Services, such as financial information, for example, shall not be construed as reflective of the financial status of User or any third party nor are they necessarily compatible with any specific accounting standards, such as GAAP (generally accepted accounting principles). User shall be exclusively responsible for retaining third party any accounting, financial, investment, legal and other professional advice.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          User Call Monitoring
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ryno may monitor and record support-related and other outbound calls to User, as well as inbound calls to ryno by User or User's representatives, for compliance, support, training and other purposes. User agrees that ryno may record any call between User and ryno relating to the Services, and agrees to:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) notify all relevant User employees that calls with ryno may be monitored and
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) indemnify and hold harmless ryno from any claim arising as a result of ryno's monitoring or recording of calls between ryno and User's representatives.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          7. Indemnification
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          User shall defend, indemnify, and hold harmless ryno, its employees, officers, directors Affiliates, suppliers, licensors, Third Party Servicers and other customers against any and all liability including damages, recoveries, deficiencies, interest, penalties, losses and reasonable attorney's fees arising out of or relating to:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) any breach of the terms hereof;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) any breach of a Third Party Servicer Agreement;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iii) any violation of any Laws;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iv) any use of User Data by User or a Third Party Servicer or other third party;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (v) User use of the Services, including in combination with any third party service;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vi) any Transaction;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (vii) any financial transaction occurring as a result of data communicated via the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (viii) any act or omission of any Third Party Servicer or Client;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ix) costs incurred by ryno enforcing the terms hereof or responding to any subpoena relating to User, User Data or a Third Party Servicer;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (x) any claim by a governmental taxing authority; or
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (xi) any dispute between User and any third party or User Personnel.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          8. Term, Termination and Suspension
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Term
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The term of this Agreement ("Term") shall begin as of when User accepts this Agreement, completes the Application or obtains an Account and shall continue on a month to month basis until terminated in accordance with the terms hereof.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Termination
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Either party may terminate this Agreement at any time for any reason or for no reason. User may terminate by closing their Account or such other means as the Services may provide. ryno may terminate this Agreement by notice to User through the Account, by email to the contact information provided in the Application or by other electronic notice to other contact information provided by User to ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Suspension
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ryno may, at its discretion, suspend User access to or otherwise modify, the Services and any component thereof, without notice in order to:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) prevent damages to, or degradation of the integrity of, ryno's internet network;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) comply with any Law;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iii) otherwise protect ryno from potential legal liability or harm to its reputation or business; or
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (iv) because ryno has opted to change the Services.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno will use commercially reasonable efforts to notify User of the reason(s) for such suspension or termination action as soon as reasonably practicable. Nothing contained in this Agreement will be construed to limit ryno's actions or remedies or act as a waiver of ryno's rights in any way with respect to any of the foregoing activities. ryno will not be responsible for any loss or damages incurred by User as a result of any termination or suspension of access to or use of the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          9. User Support
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno will use commercially reasonable efforts to provide User with technical support services relating to the Services via its technical support website, email, or telephone.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno may update the Services in its sole discretion which updates may alter, add or remove functionality of the Services. ryno may also, from time to time, schedule downtime for maintenance and upgrades to the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          10. Fees
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Fees
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Access to the Services may require User to pay Fees, as may be further described at{" "}
          <a href="https://www.rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
            www.rynopay.io
          </a>{" "}
          or otherwise on the Site, or in the Account. All Fees are in U.S. dollars and are non-refundable, unless otherwise provided herein. ryno reserves the right to amend the Fees my posting new Fees on the Site, or in the Account; such changes shall take effect within thirty (30) days unless accepted by User earlier or if User does not close their Account within such delay.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User shall authorize ryno to collect payment of Fees from a credit card, debit card or other means of payment; User authorizes ryno to charge all Fees and other amounts owing hereunder from such payment method. If User pays any Fees with a credit card, ryno may seek pre-authorization of User's credit card account prior to User's purchase to verify that the credit card is valid and has the necessary funds or credit available to cover User's purchase. ryno may instruct any Third Party Servicer to settle amounts of Fees or other amounts owing from User to ryno or any of its Affiliates from a Financial Account.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Services may include functionality for activating, updating, or canceling recurring payments for periodic charges. If User activates or updates recurring payments through the Services, User authorizes ryno to periodically charge, on a going-forward basis and until cancellation of either the recurring payments or User's account, all accrued sums on or before the payment due date for the accrued sums. If User uses the Services to updates or cancels any existing authorized one-time or recurring payment, it may take up to 10 business days for the update or cancellation to take effect.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Without limitation, ryno reserves the right to suspend the Services until all Fees or other amounts owing hereunder are paid in full or terminate this Agreement for late payment. Fees quoted do not include, and User shall hold ryno harmless from all sales, use, gross receipts, value-added, personal property or other taxes, and all applicable duties, tariffs, assessments, export and import fees or similar charges (including interest and penalties imposed thereon) on the transaction contemplated herein, other than taxes based on the net income or profits of ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          ACH Consent
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User desires to effect settlement of credits and debits from User Financial Account(s) by means of ACH and/or wire transfer in conjunction with the Services for User by ryno. In accordance with this desire, User authorizes ryno and/or its affiliates to initiate debit and credit entries to User Financial Account (the details of which are provided by User through the Account or by other means acceptable to ryno). User shall maintain sufficient funds in User Financial Account to cover such debit transactions. User states that User has the authority to agree to such transactions and that User Financial Account indicated is a valid and legitimate account for the handling of these transactions. This authority is to remain in effect until ryno receives written notice from User revoking it. This authorization is for the payment of Fees or any other sums owed to ryno. User certifies that the appropriate authorizations are in place to allow User to authorize this method of settlement. All changes to the identification of User Financial Account under this authorization must be made in writing in accordance with the Agreement. User understands that if the information supplied as to the ABA Routing Number and Account Number of the User Financial Account is incorrect, and funds are incorrectly deposited, ryno will attempt to assist User in the recovery of such funds but has no liability as to restitution of the same. ryno's assistance in recovering the funds, where available, will be billed to User at ryno's current hourly rate for such work. User acknowledges that the origination of ACH transactions to the User Financial Account must comply with the provisions of U.S. law.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Nigeria Direct Debit Mandate
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User hereby requests, instructs and authorizes ryno and its Affiliates or designees to debit User's Financial Account in accordance with any direct debit instruction issued and delivered to you by the User for such amounts necessary for daily/monthly/quarterly/semi-annual payments due in respect of this Agreement ("Nigeria Direct Debit Mandate") commencing as of the date on which this Agreement is accepted by User and ending thirty (30) days following termination of this Agreement. All such debits from User's Financial Account by ryno in accordance with any direct debit instruction issued and delivered to ryno by the User through the Services shall be treated as though they have been signed by User. The amounts are variable and may be debited on various dates. User understands that ryno may change the amount and dates only after giving User prior notice. User understands that the withdrawals hereby authorised will be processed by electronic funds transfer, and User also understands that details of each withdrawal will be printed on my bank statement and/or an accompanying voucher. User agrees to pay any bank charges relating to this Nigeria Direct Debit Mandate. This Nigeria Direct Debit Mandate may be cancelled by User by giving both Third Party Servicer and ryno twenty (20) Business Days notice in writing, sent by prepaid registered post, or delivered to the addresses stated above, but User understands that User shall not be entitled to any refund of amounts which may have already been withdrawn while this Nigeria Direct Debit Mandate was in force if such amounts were legally owing to the ryno. User understands that if any direct debit instruction is paid which breaches the terms of this Nigeria Direct Debit Mandate, User shall not be liable to ryno in any way or manner whatsoever, whether under contract, tort or negligence and that our recourse shall be limited to ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Additional Consents
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Where deemed necessary by ryno, User shall sign such additional consents as may be necessary to give effect to the ACH consent and Nigeria Direct Debit Mandate set out in this Agreement.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Refunds
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          In the event of termination of the Services for any reason except for User's breach of this Agreement, ryno may provide User with a refund of any pre-paid, but unused Fees related to such Services, subject to the following:
        </p>

        <div className="ml-6 mb-6 space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            (i) no refund shall be paid for the current month's Services, regardless of the day on which User cancels the Services;
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            (ii) ryno will retain and not be obligated to refund any prepaid Fees up to and including the amount of Fees User would have been required under this Agreement to pay for User's use of the Services for the two month period following the effective date of the termination of the Services.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User is not entitled to any refund for ryno's termination of the Services based upon User's breach. If User purchased access to the Services at a discounted price, any refund will lose the benefit of that discount.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          11. Confidential Information
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Each party acknowledges that it may directly or indirectly disclose Confidential Information to the other party in the course of negotiation of and performance of this Agreement. All such Confidential Information disclosed hereunder shall remain the sole property of the disclosing party (or other third party), and the receiving party shall have no interest in, or rights with respect thereto, except as set forth herein. Each party agrees to treat such Confidential Information with the same degree of care and security as it treats its most confidential information. Each party may disclose such Confidential Information to employees and agents who require such knowledge to perform services under this Agreement. Except as otherwise contemplated by this Agreement, neither party shall disclose the Confidential Information of the other party to any third party without the prior written consent of the disclosing party, and the duty of confidentiality created by this section shall survive any termination of the Agreement. User Data shall, without limitation, be User Confidential Information. ryno Data shall, without limitation, be ryno Confidential Information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          12. User Representations and Warranties
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          User represents and warrants to ryno that:
        </p>

        <div className="ml-6 mb-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">12.1.</span> User has the legal authority to bind User organization to this Agreement and to perform hereunder and under each Third Party Servicer Agreement to which User is a party. User is the exclusive owner of the Account and is not operating the Account on behalf of any third party.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">12.2.</span> User has the legal capacity to enter into this Agreement and perform User obligations hereunder.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">12.3.</span> User is a business, charitable organization or not-for-profit organization and shall use the Services for only business purposes and not for individual consumer purposes.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">12.4.</span> User shall immediately advise ryno of defects in the Services or any claim or threatened claim against ryno. User shall immediately notify ryno of any defects in a Product for which a Third Party Servicer has been used as a payment method.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">12.5.</span> User use of the Services conforms to all Laws and the terms of this Agreement.
          </p>

          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-semibold">12.6.</span> User represents that:
            </p>

            <div className="ml-6 space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                You are either resident in, or have a registered business or permanent establishment in, the country indicated as your address during the application process;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You shall perform all obligations under this Agreement with reasonable care, skill, and in full compliance with all applicable laws and regulations;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Any instructions or actions taken through the Services reflect genuine business or personal needs and are not made for speculative or investment purposes;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                The individual signing or accepting this Agreement on your behalf is duly authorised and empowered to bind you legally to its terms;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You have obtained, and will maintain, all required licences, approvals, consents, or other authorisations from relevant regulators or authorities necessary to lawfully receive and use the Services;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You are responsible for the timely payment of all taxes and charges related to your use of the Services, as required by applicable law;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You shall not use the Services for any unlawful or fraudulent purpose, and you have adequate internal controls in place to prevent the Services from being used in connection with money laundering or other illicit activities;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You shall not use the Services for speculative or investment-related transactions;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You shall comply with all applicable terms and conditions imposed by our third-party suppliers. If such requirements necessitate changes to your legal or operational setup (such as local incorporation), you agree to take such steps, including executing documents such as a novation agreement, as reasonably requested by us to ensure ongoing compliance;
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                You shall provide reasonable evidence of compliance with the above warranties and representations upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          13. No Warranties by ryno
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Content from Third Party Servicers
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Content from Third Party Servicers, other users, suppliers, advertisers, and other third parties may be made available to User through the Services. ryno does not control such content; User agrees that ryno is not responsible for any such content. ryno does not make any guarantees about the accuracy, currency, suitability, or quality of the information in such content and ryno assumes no responsibility for unintended, objectionable, inaccurate, misleading, or unlawful content made available by other users, advertisers, and other third parties or violation of any third party rights related to such content.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Services may contain links to websites not operated by ryno. ryno is not responsible for the content, products, materials, or practices (including privacy practices) of such websites. User understands that by using the Services, User may be exposed to third-party websites that User finds offensive, indecent or otherwise objectionable. ryno makes no warranty, representation, endorsement, or guarantee regarding, and accepts no responsibility for, the quality, content, nature or reliability of third party websites, products or services accessible by hyperlink or otherwise from the Site or Services including but not limited to Third Party Servicer Services. ryno provides these links for User's convenience only and does not control such third parties. ryno's inclusion of links to such links or integrations does not imply any endorsement of the materials on such third party services or any association with their operators. The Services may contain links to sites that are operated by ryno but which operate under different terms. It is User's responsibility to review the privacy policies and terms and conditions of any other site User visits.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6 font-semibold">
          User AGREES THAT IN NO EVENT WILL RYNO BE LIABLE TO User IN CONNECTION WITH ANY WEBSITES, CONTENT, MATERIALS, OR PRACTICES OF ANY THIRD PARTY.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Services
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 p-4 mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            THE SERVICES AND ALL MATERIAL OR CONTENT AVAILABLE THROUGH THE SERVICE ARE PROVIDED "AS IS", "AS AVAILABLE", WITH ALL FAULTS AND WITHOUT WARRANTIES, REPRESENTATIONS OR CONDITIONS OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ryno HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, REPRESENTATIONS OR CONDITIONS, WHETHER WRITTEN OR ORAL, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NONINFRINGEMENT, SECURITY, RELIABILITY, COMPLETENESS, QUIET ENJOYMENT, ACCURACY, QUALITY, INTEGRATION OR FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. ryno DOES NOT WARRANT THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION OR BE ERROR FREE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY User FROM THE SERVICES OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICES WILL CREATE ANY WARRANTY REGARDING ANY OF THE ryno ENTITIES OR THE SERVICES THAT IS NOT EXPRESSLY STATED IN THIS AGREEMENT. User ASSUMES ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM User's USE OF OR ACCESS TO THE SERVICES, User's DEALING WITH ANY OTHER USER, AND ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICES. User UNDERSTANDS AND AGREES THAT User USES THE SERVICES, AND USES, ACCESSES, DOWNLOADS, OR OTHERWISE OBTAINS MATERIALS OR CONTENT THROUGH THE SERVICES AND ANY ASSOCIATED SITES OR SERVICES, AT User's OWN DISCRETION AND RISK, AND THAT User IS SOLELY RESPONSIBLE FOR ANY DAMAGE TO User's PROPERTY (INCLUDING User's COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICES), OR THE LOSS OF DATA THAT RESULTS FROM THE USE OF THE SERVICES OR THE DOWNLOAD OR USE OF MATERIAL OR CONTENT.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 font-semibold">
          SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES AND User MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          14. Limitation of Liability
        </h2>

        <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 p-4 mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            IN NO EVENT WILL ryno BE LIABLE FOR DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT EXCEEDING FEES PAID IN RESPECT OF THE SERVICES DURING THE THREE (3) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY. THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THIS AGREEMENT WILL NOT INCREASE THE MAXIMUM LIABILITY AMOUNT.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            IN NO EVENT SHALL ryno's SUPPLIERS OR THIRD PARTY SERVICERS HAVE ANY LIABILITY ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            IN NO EVENT SHALL ryno BE LIABLE TO User FOR ANY (I) SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES, (II) LOST SAVINGS, PROFITS, DATA, USE, OR GOODWILL, (III) BUSINESS INTERRUPTION EVEN IF NOTIFIED IN ADVANCE OF SUCH POSSIBILITY, OR (IV) PERSONAL OR PROPERTY DAMAGE ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT, REGARDLESS OF CAUSE OF ACTION OR THE THEORY OF LIABILITY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE, GROSS NEGLIGENCE, FUNDAMENTAL BREACH, BREACH OF A FUNDAMENTAL TERM) OR OTHERWISE. IN NO EVENT SHALL RYNO BE LIABLE FOR PROCUREMENT OR COSTS OF SUBSTITUTE PRODUCTS OR SERVICES. THE FOREGOING LIMITATIONS WILL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY HEREIN.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm">
            TO THE EXTENT THAT RYNO MAY NOT, AS A MATTER OF LAW, DISCLAIM ANY IMPLIED WARRANTY OR LIMIT LIABILITIES, THE SCOPE AND DURATION OF SUCH WARRANTY AND THE EXTENT OF ryno's LIABILITY WILL BE THE MINIMUM PERMITTED UNDER SUCH LAW.
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall not be liable for any claims, losses or liabilities related to any Product, Client or Third Party Servicer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          15. General Clauses
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.1. Governing Law
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This Agreement shall be governed pursuant to the laws of the State of Delaware without regard to its conflict of laws rules.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.2. Dispute Resolution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Any dispute, controversy or claim arising out of or in connection with this Agreement, including the breach, termination or validity thereof, shall be resolved through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof. The arbitration shall take place in the state county where ryno is located, and the language of the arbitration shall be English. Each party shall bear its own costs of arbitration, and the parties shall share equally the fees and expenses of the arbitrator(s). The award of the arbitrator(s) shall be final and binding upon the parties and may be enforced in any court of competent jurisdiction.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Nothing in this clause shall preclude either party from seeking interim injunctive relief, or any other provisional remedy, from any court of competent jurisdiction in the State and county where ryno has its registered address. User agrees to waive any right it may have to: (i) a trial by jury; and (ii) the commencement of or participation in any class action against ryno related to this website, User also agrees to opt out of any class proceedings against ryno or its Third Party Servicers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.3. Notice
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Any notice or communication required or permitted to be given under this Agreement shall be in writing and shall be deemed to have been received when sent by electronic mail to the email address provided by the recipient party which in the case of ryno shall be{" "}
              <a href="mailto:legal@rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
                legal@rynopay.io
              </a>. It is User's responsibility to keep ryno updated as to User's current email address. Any notice or communication sent by electronic mail shall be deemed to have been received on the date and at the time of transmission, provided that no "system error" or other notice of non-delivery is generated or received by the sender.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.4. Interpretation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              The division of this Agreement into sections and the insertion of headings are for convenience of reference only and shall not affect the construction or interpretation of this Agreement. In this Agreement, words importing the singular number include the plural and vice versa; words importing gender include all genders; and words importing persons include individuals, sole proprietors, partnerships, corporations, trusts and unincorporated associations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.5. Amendment and Waiver
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ryno reserves the right, in its discretion, to amend this Agreement at any time by posting amendments on the Site. User is responsible for periodically reviewing the amendments on the Site, and User is deemed to be aware of such amendments. If User does not agree to the amended terms and conditions, User shall immediately stop using the Services. No supplement, modification or amendment to this Agreement and no waiver of any provision of this Agreement shall be binding on ryno unless executed by ryno in writing. No waiver of any of the provisions of this Agreement shall be deemed to be or shall constitute a waiver of any other provision (whether or not similar) nor shall such waiver constitute a continuing waiver unless otherwise expressly provided.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.6. Severability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Any provision of this Agreement which is held by a court of competent jurisdiction to be illegal, invalid or unenforceable in such jurisdiction shall, as to that jurisdiction, be ineffective to the extent of such illegality, invalidity or unenforceability and shall otherwise be enforced to the maximum extent permitted by law, all without affecting the remaining provisions of this Agreement or affecting the legality, validity or enforceability of such provision in any other jurisdiction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.7. Enurement
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This Agreement shall enure to the benefit of and be binding upon each of the Parties and their respective successors and permitted assigns. User acknowledges having read this Agreement before accepting it, having the authority to accept this Agreement and having received a copy of this Agreement. User represents that they have had opportunity to obtain legal advice on this Agreement prior to accepting it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.8. E-Sign Consent
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Under the Electronic Signatures in Global and National Commerce Act ("E-Sign"), this Agreement and all electronically executed documents related hereto are legally binding in the same manner as are hard copy documents executed by hand signature when (1) your electronic signature is associated with the Agreement and related documents, (2) you consent and intend to be bound by the Agreement and related documents, and (3) the Agreement is delivered in an electronic record capable of retention by the recipient at the time of receipt (i.e., print or otherwise store the electronic record).
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              This Agreement and all related electronic documents shall be governed by the provisions of E-Sign. You agree (i) that the Agreement and related documents shall be effective by electronic means (ii) to be bound by the terms and conditions of this Agreement and related documents and (iii) that you have the ability to print or otherwise store the Agreement and related documents.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.9. Assignment
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              User may not assign this Agreement or any of its rights or obligations hereunder to any third party without prior written consent of ryno. Any assignment in violation of this section shall be void. ryno may assign this Agreement without restriction and without any notice to User. The terms of this Agreement shall be binding upon permitted successors and assigns. User agrees that on a sale of all or substantively all of the assets of ryno, ryno may include in the sale the copy of User's payment method (e.g. credit card information) used to pay Fees hereunder.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.10. Right to List as a User
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              User agrees that ryno may utilize User's entity name in listings of current customers. Use of User's name in any other marketing materials or press announcements will be submitted to User in advance for approval, and such approval will not be unreasonably withheld.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.11. Compliance with Export Regulations
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              User has or shall obtain in a timely manner all necessary or appropriate licenses, permits or other governmental authorizations or approvals; shall indemnify and hold ryno harmless from, and bear all expense of, complying with all foreign or domestic laws, regulations or requirements pertaining to the importation, exportation, or use of the technology to be developed or provided herein. User shall not directly or indirectly export or re-export (including by transmission) any regulated technology to any country to which such activity is restricted by regulation or statute, without the prior written consent, if required, of the administrator of export laws.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.12. European Union Residents
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              If User resides in the European Union (EU) or if any transfer of information between User and the Services is governed by the European Union Data Protection Directive or national laws implementing that Directive, then User consents to the transfer of such information outside of the European Union to its country and to such other countries as may be contemplated by the features and activities provided by the Services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.13. Construction
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Except as otherwise provided herein, the Parties rights and remedies under this Agreement are cumulative. The term "including" means "including without limitation." The headings of sections of this Agreement are for reference purposes only and have no substantive effect.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.14. Force Majeure
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              User acknowledges and understands that if ryno is unable to provide Services as a result of a force majeure event ryno will not be in breach of this Agreement and will not be liable for delays caused by such event. A force majeure event means any event beyond the control of ryno.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.15. Waiver
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              The failure to exercise, or delay in exercising, a right, power or remedy provided in this Agreement or by law in one instance shall not preclude enforcement thereof on future occasions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.16. Independent Contractors
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              User's relationship to ryno is that of an independent contractor, and neither Party is an agent or partner of the other. User will not have, and will not represent to any third party that it has, any authority to act on behalf of ryno.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.17. Entire Agreement
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              In the event of any conflict between this Agreement and the information provided during Application or otherwise on the Site, this Agreement shall control. In the event of any inconsistency between the body of this Agreement and the ryno Privacy Policy, the former shall prevail. This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes any and all prior agreements, negotiations, or other communications, whether written or oral. This Agreement may be executed in one or more counterparts, each of which shall be deemed an original and all of which shall be taken together and deemed to be one instrument. A printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.18. English Language
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              It is the express wish of the parties that this Agreement and all related documents be drawn up in English.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              15.19. Survival
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upon termination or expiration of this Agreement for any reason: (i) all rights and obligations of both Parties (except for User's payment of all sums then owing), including all licenses granted hereunder, shall immediately terminate except as provided below; (ii) within thirty (30) days after the effective date of termination, each Party shall comply with the obligations to return or destroy all Confidential Information. The following Sections will also survive expiration or termination of this Agreement for any reason: the introductory paragraph, Sections 3 Limitations, 4 ryno Intellectual Property Rights, 5 User Data Consent, 7 Indemnity, 10 Fees, 11 Confidential Information, 12 User Warranties, 13 No Warranties by ryno, 14 Limitation of Liability and 15 General Clauses.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          16. Glossary
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The following words used in this Agreement are defined as follows:
        </p>

        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Account</span>
            <span className="text-gray-600 dark:text-gray-400"> means an account made available to User through which User can transmit instructions or receive information in relation to the Services.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">ACH</span>
            <span className="text-gray-600 dark:text-gray-400"> means Automated Clearing House payment transaction.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Affiliate</span>
            <span className="text-gray-600 dark:text-gray-400"> means, in relation to a Person, another Person that directly or indirectly owns or controls, is owned or controlled by, or is under common ownership or common control with the Person, or a Person's principal partners, shareholders, or owners of some other ownership interest.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Application</span>
            <span className="text-gray-600 dark:text-gray-400"> means the paper or online application completed by User when applying for the Services all of which is incorporated herein by reference.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Client</span>
            <span className="text-gray-600 dark:text-gray-400"> means a client or customer of User.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Confidential Information</span>
            <span className="text-gray-600 dark:text-gray-400"> means all proprietary, secret or confidential information or data relating to either party and its affiliates, operations, employees, products or services, clients, customers or potential customers. Confidential Information shall include customer lists, cardholder account numbers, pricing information, computer access codes, instruction and/or procedural manuals, and the terms and conditions of this Agreement. Information shall not be considered Confidential Information to the extent, but only to the extent, that such information is: (i) already known to the receiving party free of any restriction at the time it is obtained; (ii) subsequently learned from an independent third party free of any restriction and without breach of this Agreement; (iii) or becomes publicly available through no wrongful act of the receiving party; (iv) independently developed by the receiving party without reference to any Confidential Information of the other; or (v) required to be disclosed by Law.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Data</span>
            <span className="text-gray-600 dark:text-gray-400"> means User Data or ryno Data.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Fees</span>
            <span className="text-gray-600 dark:text-gray-400"> means fees payable by User for use of the Services, as disclosed at{" "}
              <a href="https://www.rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
                https://www.rynopay.io
              </a>{" "}
              or otherwise on the Site, or in the Account.
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Financial Account</span>
            <span className="text-gray-600 dark:text-gray-400"> means User bank account or other financial account, if any, with a Third Party Servicer.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Intellectual Property Rights</span>
            <span className="text-gray-600 dark:text-gray-400"> means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress, works of authorship, inventions, discoveries and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of any state, country, territory or other jurisdiction.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">ryno Data</span>
            <span className="text-gray-600 dark:text-gray-400"> means information concerning Services or provided to User by ryno through the Account or otherwise.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">ryno Privacy Policy</span>
            <span className="text-gray-600 dark:text-gray-400"> means the privacy policy of ryno posted at{" "}
              <a href="https://www.rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
                https://www.rynopay.io
              </a>{" "}
              such as it is from time to time.
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">ryno System</span>
            <span className="text-gray-600 dark:text-gray-400"> means a cloud-based system operated by ryno that allows User to access User Account and initiate Transactions.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Laws</span>
            <span className="text-gray-600 dark:text-gray-400"> shall mean laws, statutes, codes, ordinances, orders, decrees, rules, regulations, and municipal by laws, whether domestic, or foreign, all judgments, orders, writs, injunctions, decisions, rulings, decrees, and awards of any government authority having jurisdiction.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Party</span>
            <span className="text-gray-600 dark:text-gray-400"> means either User or ryno and Parties means both User and ryno.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Payment Processing Services</span>
            <span className="text-gray-600 dark:text-gray-400"> means the service of receiving funds for User sales from Clients under separate Payment Processing Terms. For the purposes of this Agreement, Payment Processing Services are also Third Party Servicer Services but without reducing ryno liability under Payment Processing Terms.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Payment Processing Terms</span>
            <span className="text-gray-600 dark:text-gray-400"> means an Agreement between User and ryno or an Affiliate of ryno under which Payment Processing Services are provided. For the purposes of this Agreement, Payment Processing Terms are also a Third Party Servicer Agreement.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Person</span>
            <span className="text-gray-600 dark:text-gray-400"> is to be broadly interpreted and includes an individual, a corporation, a partnership, a trust, an unincorporated organization, the government of a country or any political subdivision thereof, or any agency or department of any such government, and the executors, administrators or other legal representatives of an individual in such capacity.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Product</span>
            <span className="text-gray-600 dark:text-gray-400"> means any product or service for sale or provided by User or for which a Third Party Servicer is used to make payment or for which Services is used to assist in a payment.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Site</span>
            <span className="text-gray-600 dark:text-gray-400"> means{" "}
              <a href="https://www.rynopay.io" className="text-blue-600 dark:text-blue-400 underline">
                https://www.rynopay.io
              </a>{" "}
              or such other websites or portals through which the Services are accessible.
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Term</span>
            <span className="text-gray-600 dark:text-gray-400"> has the meaning set out in Section 8.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Third Party Servicer Agreement</span>
            <span className="text-gray-600 dark:text-gray-400"> means an agreement between User and a Third Party Servicer concerning the supply of Third Party Servicer Services to User.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Third Party Servicer</span>
            <span className="text-gray-600 dark:text-gray-400"> means a third party that has entered into Third Party Servicer Agreement with User pursuant to which the Third Party Servicer provides Third Party Servicer Services to User.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Third Party Servicer Services</span>
            <span className="text-gray-600 dark:text-gray-400"> means the services of a Third Party Servicer provided pursuant to Third Party Servicer Agreement.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">Transaction</span>
            <span className="text-gray-600 dark:text-gray-400"> means sending or attempted sending of Data, by way of the Services, between any of User, ryno and a Third Party Servicer.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">User Data</span>
            <span className="text-gray-600 dark:text-gray-400"> means any and all non-public identifiable personal information of Users.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">User Device</span>
            <span className="text-gray-600 dark:text-gray-400"> means computer system, tablet or phone used by User to access the Services or manage Data or User business.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">User Financial Account</span>
            <span className="text-gray-600 dark:text-gray-400"> means a bank account of the User identified by User as being an account from which ryno may debit Fees or other amounts owing hereunder.</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900 dark:text-white">User</span>
            <span className="text-gray-600 dark:text-gray-400"> means you and if you are using the Services on behalf of a company, entity, or organization, the entity, partnership or organization, then 'you' also includes such entity.</span>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Compliance with Laws
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You agree to comply with all applicable laws and regulations, including, without limitation, Canadian laws, international anti-money laundering (AML) and counter-terrorist financing (CFT) obligations, and sanctions regulations enforced by the Office of Foreign Assets Control (OFAC), the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), and any other relevant regulatory authorities. Rhyno Financial Inc reserves the right to monitor activity and report any suspicious or potentially unlawful conduct to the appropriate law enforcement or regulatory agencies as required or permitted by applicable law.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Governing Law
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          These Terms shall be governed by and construed in accordance with the laws of Alberta, Canada, without giving effect to any principles of conflicts of law.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          By accessing or using our website, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions.
        </p>
      </section>
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Effective Date:</span> August 12, 2025
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span className="font-semibold">Last Updated:</span> August 12, 2025
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span className="font-semibold">Version:</span> 1.0
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          For questions about these Terms and Conditions, please contact us at{" "}
          <a 
            href="mailto:legal@rynopay.io" 
            className="text-blue-600 dark:text-blue-400 underline"
          >
            legal@rynopay.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsContent;
