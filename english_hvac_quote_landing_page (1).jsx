import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HVACQuoteLandingPage() {
  const funnelSteps = [
    {
      key: "service",
      type: "options",
      label: "What service do you require?",
      options: ["New installation", "Replacement", "Repair", "Maintenance"],
    },
    {
      key: "propertyType",
      type: "options",
      label: "What type of property is this for?",
      options: ["House", "Flat / Apartment", "Office", "Commercial premises"],
    },
    {
      key: "rooms",
      type: "options",
      label: "How many rooms require cooling?",
      options: ["1 room", "2 rooms", "3 rooms", "4+ rooms"],
    },
    {
      key: "roomSize",
      type: "options",
      label: "What is the approximate room size?",
      options: ["Under 50m²", "50m² – 100m²", "101m² – 200m²", "Over 200m²"],
    },
    {
      key: "postcode",
      type: "input",
      label: "What is the installation postcode?",
      placeholder: "e.g. SW1A 1AA",
      inputType: "text",
    },
    {
      key: "timeframe",
      type: "options",
      label: "When are you looking to proceed?",
      options: ["As soon as possible", "Within 1 month", "Within 3 months", "Just researching options"],
    },
    {
      key: "fullName",
      type: "input",
      label: "What is your full name?",
      placeholder: "Your full name",
      inputType: "text",
    },
    {
      key: "email",
      type: "input",
      label: "What is your email address?",
      placeholder: "you@example.com",
      inputType: "email",
    },
    {
      key: "phone",
      type: "input",
      label: "What is your phone number?",
      placeholder: "Your phone number",
      inputType: "tel",
      optional: true,
    },
  ];

  const [formData, setFormData] = useState({
    service: "",
    propertyType: "",
    rooms: "",
    roomSize: "",
    postcode: "",
    timeframe: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showQuoteView, setShowQuoteView] = useState(false);

  const totalSteps = funnelSteps.length;
  const activeStep = funnelSteps[currentStep];

  const completedSteps = useMemo(() => {
    return funnelSteps.filter((step) => {
      if (step.optional) return false;
      return String(formData[step.key] || "").trim() !== "";
    }).length;
  }, [formData]);

  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  const updateField = (key, value) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const canGoNext = useMemo(() => {
    if (!activeStep) return false;
    if (activeStep.optional) return true;
    return String(formData[activeStep.key] || "").trim() !== "";
  }, [activeStep, formData]);

  const handleOptionSelect = (key, value) => {
    updateField(key, value);

    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setShowQuoteView(true);
      }
    }, 180);
  };

  const handleNext = () => {
    if (!canGoNext) return;

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowQuoteView(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleEdit = () => {
    setShowQuoteView(false);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Professional quote funnel
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
              Compare air conditioning quotes from trusted local installers.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              A cleaner one-question-at-a-time experience designed to reduce friction and guide visitors smoothly toward quote comparison.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Free to use",
                  text: "No cost and no obligation to proceed.",
                },
                {
                  title: "Clear process",
                  text: "Simple steps with better form completion flow.",
                },
                {
                  title: "Qualified matches",
                  text: "Suitable local professionals based on project details.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            {!showQuoteView ? (
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                      Step {currentStep + 1} of {totalSteps}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Request quotes
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-stone-100 px-4 py-3 text-center">
                    <div className="text-xs uppercase tracking-wide text-slate-500">Completed</div>
                    <div className="text-lg font-semibold text-slate-900">{completedSteps}/{totalSteps - 1}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>Progress</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-200">
                    <div
                      className="h-full rounded-full bg-slate-900 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 min-h-[340px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.22 }}
                      className="space-y-6"
                    >
                      <div>
                        <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                          Current question
                        </div>
                        <h3 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
                          {activeStep.label}
                        </h3>
                        {activeStep.optional ? (
                          <p className="mt-3 text-sm text-slate-500">This step is optional.</p>
                        ) : null}
                      </div>

                      {activeStep.type === "options" ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {activeStep.options.map((option) => {
                            const selected = formData[activeStep.key] === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleOptionSelect(activeStep.key, option)}
                                className={`rounded-2xl border px-4 py-5 text-left text-sm font-medium transition ${
                                  selected
                                    ? "border-slate-900 bg-slate-900 text-white"
                                    : "border-stone-300 bg-white text-slate-700 hover:border-slate-900 hover:bg-stone-50"
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <input
                            type={activeStep.inputType}
                            value={formData[activeStep.key]}
                            onChange={(e) => updateField(activeStep.key, e.target.value)}
                            placeholder={activeStep.placeholder}
                            className="w-full rounded-2xl border border-stone-300 px-4 py-4 text-sm outline-none transition focus:border-slate-900"
                          />

                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={!canGoNext && !activeStep.optional}
                            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Continue
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-200 pt-5">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <div className="text-right text-sm text-slate-500">
                    {String(formData[activeStep.key] || "").trim() !== "" ? "Answer saved" : "Awaiting answer"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-green-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Enquiry complete
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                      Ready for quote comparison
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                      The visitor has completed the funnel. These details can now be passed into a quote comparison or installer matching stage.
                    </p>
                  </div>

                  <button
                    onClick={handleEdit}
                    className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-stone-50"
                  >
                    Edit responses
                  </button>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>Completion</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-200">
                    <div className="h-full w-full rounded-full bg-slate-900" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                    <h3 className="text-base font-semibold text-slate-950">Submitted details</h3>
                    <div className="mt-4 space-y-3 text-sm text-slate-700">
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Service</span><span className="font-medium text-slate-950">{formData.service}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Property type</span><span className="font-medium text-slate-950">{formData.propertyType}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Rooms</span><span className="font-medium text-slate-950">{formData.rooms}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Room size</span><span className="font-medium text-slate-950">{formData.roomSize}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Postcode</span><span className="font-medium text-slate-950">{formData.postcode}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Timeframe</span><span className="font-medium text-slate-950">{formData.timeframe}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Name</span><span className="font-medium text-slate-950">{formData.fullName}</span></div>
                      <div className="flex justify-between gap-4 border-b border-stone-200 pb-3"><span>Email</span><span className="font-medium text-slate-950">{formData.email}</span></div>
                      <div className="flex justify-between gap-4"><span>Phone</span><span className="font-medium text-slate-950">{formData.phone || "Not provided"}</span></div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-950">Next stage</h3>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                        <div className="text-sm font-semibold text-slate-950">Installer matching ready</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          The enquiry now contains the core information typically needed for quote routing and comparison.
                        </p>
                      </div>

                      <button
                        type="button"
                        className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Compare Available Quotes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
