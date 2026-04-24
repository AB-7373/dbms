export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-sb-bg text-sb-text relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sb-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sb-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="border-b-4 border-sb-border pb-8 mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-sb-text-muted italic">
            Last Updated: April 22, 2026
          </p>
        </div>

        <section className="mb-12 space-y-10">

          <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
            This Privacy Policy explains how Streamboat collects, uses, protects, processes,
            observes, logs, analyzes, and occasionally side-eyes your data when you use our platform.
            By continuing to use this service, you agree to this policy, even if you are currently
            scrolling at high speed trying to reach the bottom.
            <br /><br />
            We understand that nobody actually reads privacy policies. In fact, statistically speaking,
            you are either skimming this, pretending to read this, or testing how long this page goes.
            If it's the third one, congratulations, you are exactly the kind of user this section was written for.
          </p>

          <div className="space-y-12">

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                1. Information We Collect (Yes, It's a Lot)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We collect the information you provide directly, such as your name, email address,
                uploaded files, preferences, and any data you voluntarily input into the system.
                <br /><br />
                We also collect usage data such as clicks, scroll depth, hover duration, rage clicks,
                confused clicks, accidental clicks, and those moments where you click something twice
                because it didn't respond the first time.
                <br /><br />
                Device data may include your browser, operating system, screen size, network conditions,
                and how aggressively your CPU spins up when multiple tabs are open.
                <br /><br />
                We do not collect your thoughts. Yet.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                2. How We Use Your Data (We Promise It's Not Evil)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                Your data is used to operate the platform, improve performance, personalize your experience,
                and prevent misuse.
                <br /><br />
                For example, if someone tries to download an unreasonable amount of data in an
                impressively short time, we may flag that behavior as suspicious instead of awarding them a medal.
                <br /><br />
                We also analyze trends to make the system better, faster, and slightly less confusing.
                Whether we succeed is an ongoing experiment.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                3. File Uploads & AI Processing (The Fancy Part)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                Uploaded files are processed for storage, indexing, and AI-based functionality.
                This includes generating embeddings, performing similarity searches,
                and other operations that sound extremely advanced (because they are).
                <br /><br />
                These processes allow the system to understand relationships between content,
                not in a human way, but in a "math and vectors" kind of way.
                <br /><br />
                If your file is particularly unique, the system may appreciate it internally,
                but it will not send it fan mail.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                4. Data Sharing (Short Answer: No Selling)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We do not sell your data. Not today, not tomorrow, not even if someone offers us snacks.
                <br /><br />
                Data may be shared with trusted third-party providers strictly for functionality,
                including hosting, analytics, and AI services.
                <br /><br />
                These providers are required to handle your data responsibly, which we verify
                using contracts and occasional deep sighs of trust.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                5. Security Infrastructure (We Try Very Hard)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We use encryption, access control, monitoring systems, and other security practices
                to protect your data.
                <br /><br />
                We actively discourage scraping, reverse engineering, and creative attempts to
                bypass platform restrictions using "just one quick trick".
                <br /><br />
                While no system is perfect, we put in significant effort, write a lot of logs,
                and occasionally question our life choices while debugging security issues at 3 AM.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                6. Cookies & Tracking (Not the Tasty Kind)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We use cookies to maintain sessions, remember preferences, and keep the platform functioning.
                <br /><br />
                Disabling cookies may result in unexpected behavior, including but not limited to:
                confusion, repeated logins, and the platform acting like it has never met you before.
                <br /><br />
                Which, technically, it will not remember you. So fair enough.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                7. Data Retention (We Don't Hoard Forever)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We retain data only as long as necessary to provide services and maintain platform integrity.
                <br /><br />
                When data is no longer needed, we attempt to delete it in a timely and responsible manner.
                Sometimes this happens instantly. Sometimes it takes a bit longer. Systems are like that.
                <br /><br />
                We do not keep your data just for nostalgia.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                8. Your Rights (You Have Them)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                You may request access, correction, or deletion of your data, subject to reasonable limitations.
                <br /><br />
                You may also contact us with questions, concerns, or messages that begin with
                "Hi, just a quick question..." and turn into a full essay.
                <br /><br />
                We will read them. Eventually.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                9. Changes to This Policy (Yes, It Can Get Even Longer)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                We may update this Privacy Policy occasionally. When we do, we update the date
                and feel a strong sense of accomplishment.
                <br /><br />
                Continued use of the platform means you accept the updated policy,
                even if you did not read the previous version, this version, or any version ever.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-widest text-white border-l-4 border-sb-primary pl-4 mb-4">
                10. Final Notes (You Made It This Far?)
              </h2>
              <p className="text-sm leading-relaxed text-sb-text-muted text-justify">
                If you have actually read this entire policy, we are genuinely impressed.
                Most users do not make it past section one.
                <br /><br />
                At this point, you have demonstrated patience, curiosity, and possibly procrastination.
                <br /><br />
                Either way, thank you for using Streamboat. Your data is safe, your scroll journey was long,
                and this document has successfully achieved its true purpose: being extremely long.
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}