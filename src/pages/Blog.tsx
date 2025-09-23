import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { useBlogPost } from "@/hooks/useSanityData";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

// Fallback content for when Sanity data is not available
const fallbackContent = {
  "interim-relief-tds-prosecution": {
    title: "Interim Relief Granted in TDS Prosecution: A Notable Decision by Allahabad High Court",
    body: (
      <div className="space-y-6">
        <p>
          In a significant development in the realm of tax litigation, the Hon’ble High Court of Allahabad has granted interim relief to two applicants in a case concerning delayed deposit of Tax Deducted at Source (TDS). The decision is noteworthy for its interpretation of Section 276B of the Income Tax Act, especially in situations where tax liabilities, although paid late, are regularized with interest and penalty.
        </p>
        <p>
          This case highlights a growing judicial inclination to distinguish between deliberate tax evasion and procedural lapses that are later rectified. It brings much-needed clarity and relief to taxpayers and directors who may face prosecution for technical defaults.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Background of the Case</h3>
        <p>
          The matter pertains to the Financial Year 2018–19, during which the applicants, including Mr. Geetamber Anand (Director), were alleged to have defaulted in depositing TDS within the prescribed time. However, the tax dues were eventually paid along with interest and penalty, which, according to the applicants, removes the element of “wilful failure” to pay tax as required under Section 276B of the Income Tax Act, 1961.
        </p>
        <p>
          The prosecution was initiated based on a show cause notice dated 29th March 2024, which culminated in a summoning order by the trial court on 18th September 2024.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Arguments and Legal Position</h3>
        <p>
          The applicants, represented by Mr. Vivek Sarin, argued that the mere delay in depositing TDS—when subsequently regularized—should not trigger prosecution under Section 276B. They emphasized that the legislative intent behind the provision is to penalize wilful and deliberate non-payment of tax, not cases where there is no intent to evade.
        </p>
        <p>
          In support of their contention, the applicants placed reliance on the decision of the Bombay High Court in Hemant Mahipatray Shah & Anr. v. Anand Upadhyay & Anr., 2024 SCC OnLine Bom 2618, where similar facts led the court to conclude that no prima facie case for prosecution existed.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Court’s Observation and Interim Relief</h3>
        <p>
          Taking note of the submissions, the Hon’ble Allahabad High Court issued notice to the Union of India, represented by Mr. Ashish Agrawal, who sought time to file a counter affidavit. The matter is now listed for further hearing on 9th July 2025.
        </p>
        <p>
          Importantly, the Court has stayed the ongoing proceedings before the trial court in the interim, offering much-needed relief to the applicants and setting a persuasive precedent for similar matters.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Conclusion</h3>
        <p>
          The Allahabad High Court’s interim relief is a welcome move that brings clarity to how technical non-compliance with TDS timelines should be treated, especially when accompanied by subsequent corrective measures. It reflects a judicious approach that balances enforcement with fairness and is likely to influence similar cases going forward.
        </p>
        <div className="flex items-center gap-3">
          <span>Read the full order here: Oder (Give Download Button)</span>
          <Button variant="outline">Download</Button>
        </div>
      </div>
    )
  },
  "nclt-operational-debt-cirp": {
    title: "NCLT Admits Insolvency Petition for Default in Operational Debt",
    body: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Background</h3>
        <p>
          A petition under Section 9 of the Insolvency and Bankruptcy Code, 2016 was filed seeking initiation of the Corporate Insolvency Resolution Process (CIRP) against a corporate debtor for default in repayment of operational dues amounting to over ₹11 crore. The claim arose from unpaid invoices for supply of goods and fabrication services rendered between 2014 and 2018. Despite repeated follow-ups, the dues remained unpaid. The operational creditor had also issued a statutory demand notice under Section 8 on 26.02.2020, which was met with no response or dispute from the debtor.
        </p>
        <p>
          The case had earlier been dismissed as infructuous due to the debtor being subject to a different CIRP at the time. However, following the withdrawal of that process, the present petition was restored for consideration.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Arguments</h3>
        <p>
          The operational creditor presented evidence including multiple email correspondences and a corporate guarantee dated 18.08.2017, clearly acknowledging the debt. It was also pointed out that the corporate debtor had neither made any payments nor raised a pre-existing dispute regarding the outstanding dues. The total amount claimed exceeded the ₹1 crore threshold required under Section 4 of the IBC, making the petition maintainable.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Conclusion</h3>
        <p>
          After reviewing the materials on record, the Tribunal held that the operational debt was valid and undisputed, and that the statutory conditions for initiating CIRP under Section 9 were met. Accordingly, the petition was admitted, CIRP was initiated, and a moratorium under Section 14 of the Code was imposed. The case underscores the importance of acknowledgment of debt and timely response to statutory demands under the IBC framework.
        </p>
        <div className="flex items-center gap-3">
          <span>Read the complete order here: Order (Give Download Button)</span>
          <Button variant="outline">Download</Button>
        </div>
      </div>
    )
  },
  "ncdrc-fire-insurance-oversight": {
    title: "NCDRC Holds Insurer Liable for Own Oversight in Fire Insurance Claim: A.K. Rubber vs. Oriental Insurance Co.",
    body: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Introduction</h3>
        <p>
          In a landmark ruling that underscores the importance of insurer accountability and service diligence, the National Consumer Disputes Redressal Commission (NCDRC) has held Oriental Insurance Company Ltd. liable for wrongfully repudiating an insurance claim despite the insured fulfilling all required obligations.
        </p>
        <p>
          The case—A.K. Rubber vs. Oriental Insurance Company Ltd. (Consumer Case No. 2750 of 2017)—involved a substantial claim of over ₹2.28 crore for damages caused by a fire, which the insurer had denied citing a location discrepancy in the policy. The Court’s decision, delivered on February 13, 2023, provides clarity on policy interpretation and the scope of service deficiency under consumer protection laws.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Background and Key Facts</h3>
        <p>
          The complainant suffered significant property damage due to a fire at its factory located in Sarigam, Umbergaon, on 16 February 2014. Seeking indemnification, the firm filed a claim of ₹2,28,14,988, which was duly assessed and validated by the appointed surveyor.
        </p>
        <p>
          However, Oriental Insurance rejected the claim on the grounds that the insurance policy—renewed in 2013—covered a different location (Dabhel, Daman) and not the actual site of the fire. The insurer cited this as a violation of policy conditions and claimed the risk at the fire site was never insured.
        </p>
        <p>
          The twist? The factory had shifted to Sarigam in 2012, and while renewing the policy, the insured’s banker, Oriental Bank of Commerce, had explicitly requested coverage for the new location. Due to an internal oversight, the insurer issued the policy for the old address.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Issues Before the Court</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Whether the repudiation of the claim was justified on the basis of the location mismatch.</li>
          <li>Whether the complainant had breached policy conditions.</li>
          <li>Whether the insurer’s conduct amounted to deficiency in service.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800">Court’s Findings</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Repudiation Was Invalid</span>
            <p>
              The Court observed that the insurer was informed about the change in factory location at the time of renewal, and the mistake in issuing coverage for the incorrect address was entirely on the part of the insurer. The insured had acted in good faith and fulfilled its obligation by routing the request through its banker.
            </p>
          </li>
          <li>
            <span className="font-semibold">No Violation of Policy Conditions</span>
            <p>
              The NCDRC rejected the insurer’s reliance on Clauses 1 and 3 of the Standard Fire and Special Perils Policy, noting that there was no misrepresentation or material change in risk from the complainant’s side.
            </p>
          </li>
          <li>
            <span className="font-semibold">Deficiency in Service Established</span>
            <p>
              The insurer’s failure to issue a correct policy despite being informed, along with its refusal to settle the claim, was held to constitute deficiency in service under the Consumer Protection Act.
            </p>
          </li>
          <li>
            <span className="font-semibold">Reliance on Precedent</span>
            <p>
              The Court cited LIC v. Rajiv Kumar Bhasker and Gurmel Singh v. National Insurance Co. Ltd., reaffirming that an insurer is liable for the actions and communications of its agents, including bankers.
            </p>
          </li>
        </ol>
        <h3 className="text-xl font-semibold text-gray-800">Final Order</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pay ₹2,28,14,988 as assessed in the final survey report dated 09.09.2014,</li>
          <li>Pay interest at 9% per annum from 16.08.2014 (six months after the date of loss) until the actual date of payment,</li>
          <li>Comply with the order within two months from the date of judgment.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800">Conclusion</h3>
        <p>
          This judgment serves as a crucial reminder for insurers to exercise due diligence in policy issuance and renewals, especially when acting through third-party agents like banks. It also reiterates the judiciary’s commitment to protecting policyholders from unjust repudiations arising from procedural errors not attributable to them.
        </p>
        <p>
          For businesses and insured entities, the case highlights the importance of maintaining clear communication with insurers and preserving all documentation related to policy renewals and endorsements.
        </p>
        <div className="flex items-center gap-3">
          <span>Read the complete order here: Order (Give Download Button)</span>
          <Button variant="outline">Download</Button>
        </div>
      </div>
    )
  },
  "delhi-hc-gst-fresh-hearing": {
    title: "Delhi High Court Grants Fresh Hearing to GST Defaulter Amidst Pending SC Verdict on Tax Notification Validity",
    body: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Introduction</h3>
        <p>
          In a recent ruling with implications for taxpayers grappling with procedural lapses and legal uncertainties, the Delhi High Court has granted a fresh hearing to M/s Jinender Paper Mart, whose GST registration was suspended and subsequently cancelled without, allegedly, affording a fair opportunity to respond. The order also indirectly acknowledges the broader uncertainty surrounding the validity of certain GST notifications, currently under consideration by the Supreme Court.
        </p>
        <p>
          This case—M/S Jinender Paper Mart v. Sales Tax Officer Class II/AVATO Ward 12, Zone-2, Delhi and Others—throws light on the importance of due process in tax adjudication, especially in the digital era where GST portal access plays a central role in compliance.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Background and Key Issues</h3>
        <p>
          The petitioner challenged the order dated 27th August 2024, passed under the CGST Act, on two key grounds:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Non-service of the Show Cause Notice (SCN) dated 29th May 2024, which formed the basis of cancellation.</li>
          <li>Lack of opportunity for a personal hearing, allegedly due to the prior suspension of GST registration via SCN dated 24th July 2023, which restricted their access to the GST portal.</li>
        </ol>
        <p>
          Further, the petitioner questioned the constitutional validity of Central Tax Notifications No. 9/2023 and 56/2023, which have far-reaching implications for GST compliance and enforcement. These notifications are currently under judicial scrutiny in SLP No. 4240/2025 before the Hon’ble Supreme Court of India.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Observations and Findings</h3>
        <p>
          The Court acknowledged that while a personal hearing was scheduled for 23rd August 2024, the petitioner neither attended nor submitted a written response. However, considering the suspension of GST registration and portal inaccessibility, the Court held that there was merit in the petitioner’s claim of being denied a reasonable opportunity to be heard.
        </p>
        <p>
          In light of procedural fairness and pending constitutional scrutiny of the notifications in question, the High Court found it appropriate to grant a fresh hearing.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Delhi High Court’s Decision</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Set aside the impugned cancellation order dated 27th August 2024.</li>
          <li>Directed the Adjudicating Authority to conduct a fresh hearing.</li>
          <li>Allowed the petitioner to file a reply to the SCN by 10th July 2025.</li>
          <li>Ordered that a personal hearing must be granted thereafter.</li>
          <li>Directed that access to the GST portal be restored to enable due compliance.</li>
          <li>Clarified that the outcome of this case will be subject to the final decision of the Supreme Court in the pending SLP and other connected petitions before the Delhi High Court.</li>
        </ul>
        <p>The writ petition was disposed of accordingly.</p>
        <h3 className="text-xl font-semibold text-gray-800">Conclusion</h3>
        <p>
          This ruling underscores the judiciary’s continued emphasis on natural justice in tax proceedings, especially in cases where procedural constraints may prevent taxpayers from effectively presenting their case. The Delhi High Court’s decision provides temporary relief to M/s Jinender Paper Mart while the industry awaits clarity on the constitutional validity of key GST notifications.
        </p>
        <p>
          Until the Supreme Court rules on the matter, similar cases may witness judicial leniency where procedural fairness is found to be compromised.
        </p>
        <div className="flex items-center gap-3">
          <span>Read the complete order here: Order (Give Download Button)</span>
          <Button variant="outline">Download</Button>
        </div>
      </div>
    )
  }
};

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: blogPost, isLoading, error } = useBlogPost(slug || '');

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-300 rounded mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Error state or article not found
  if (error || !blogPost) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection="insights" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white/95 backdrop-blur-sm p-8">
                <div className="max-w-4xl">
                  <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
                  <Link to="/" className="text-primary">Go back</Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection="insights" />
          </div>
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white/95 backdrop-blur-sm p-8">
              <div className="max-w-4xl">
                {/* Back Navigation */}
                <div className="mb-6">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      const cameFromSameSite = document.referrer && new URL(document.referrer).origin === window.location.origin;
                      if (window.history.length > 1 && cameFromSameSite) {
                        navigate(-1);
                      } else {
                        navigate('/#insights');
                      }
                    }}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-0 h-auto"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Previous Page
                  </Button>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">{blogPost.title}</h1>
                
                {/* Featured Image */}
                {blogPost.featuredImage && (
                  <div className="mb-8">
                    <img
                      src={urlFor(blogPost.featuredImage).width(800).height(400).fit('crop').url()}
                      alt={blogPost.featuredImage.alt || blogPost.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                
                {/* Content */}
                <SanityContentRenderer content={blogPost.content} />
                
                {/* Download Button */}
                {blogPost.downloadUrl && (
                  <div className="flex items-center gap-3 mt-8">
                    <span className="font-semibold">Read The Full Document Here </span>
                    <Button variant="outline" asChild>
                      <a href={blogPost.downloadUrl} target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="hidden lg:block lg:w-60 xl:w-64">
            <RightSidebar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

