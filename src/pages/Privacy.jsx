import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="page">
      <Header />

      <main className="legal-page">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>
            We encourage you to read our Privacy Policy carefully. This covers all use of Breach Interactive Online Services.
          </p>
          <small>10/17/2026</small>
        </div>

        <div className="legal-layout">
          <aside className="legal-navigation">
            <a href="#introduction">Introduction</a>
            <a href="#information">What data we collect</a>
            <a href="#use">How we use your data</a>
            <a href="#sharing">Who we share data with</a>
            <a href="#retention">Data retention</a>
            <a href="#rights">Your rights</a>
            <a href="#security">Protection</a>
            <a href="#changes">Changes</a>
            <a href="#contact">Contact us</a>
          </aside>

          <article className="legal-content">
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
We respect your online privacy and we're here to answer any questions regarding the storage of your data. In this policy, we will cover what types of data we collect, how we store it, who we share it with and how you can request deletion of your data.
              </p>
            </section>

            <section id="information">
              <h2>2. What data we collect</h2>

              <p>
                Depending on how you use Breach Interactive Online Services, we may collect the following types of data:
              </p>

              <ul>
                <li>
                  <strong>Roblox User ID</strong>
                </li>

                <li>
                  <strong>Discord User ID</strong>
                </li>
              </ul>
            </section>

            <section id="use">
              <h2>3. How we use your data</h2>

              <p>
                We use your data for the following reasons:
              </p>

              <ul>
                <li>Prevent unauthorized access to the service</li>
                <li>Monitor traffic and defend from attacks to our service</li>
                <li>Verify user information to prevent alternate accounts when participating in Breach Interactive Online Services powered communities</li>
              </ul>
            </section>

            <section id="sharing">
              <h2>4. Who we share data with</h2>

              <p>
We do not sell or share your data with any third parties.
              </p>
            </section>

            <section id="retention">
              <h2>5. Data retention</h2>

              <p>
                Since we require your Roblox User ID and Discord User ID to operate the service, this information is kept until you request removal of your data.
              </p>
            </section>

            <section id="rights">
              <h2>6. Your rights</h2>

              <p>
You're free to request removal of your data at any time, regardless of data protection laws in your region. We also offer the following services upon contact:
              </p>
              <ul>
                <li>Request all of the data stored</li>
                <li>Request inaccurate information correction</li>
                <li>Request specific data deletion</li>
                <li>Request to stop processing data in specific methods</li>
              </ul>

              <p>
To request data deletion or one of the services, please contact us at legal@playbreach.fyi.
              </p>
            </section>

            <section id="security">
              <h2>7. Protection</h2>

              <p>
                We use Virtual Private Servers (VPS) provided by Webdock. Your data is stored in the DK-DC1 datacenter located in Denmark, which is GDPR complaint, with EU-based data residency.
              </p>
            </section>

            <section id="changes">
              <h2>8. Changes</h2>
              <p>
                We may make changes to this policy at any time. To continue to use our services, you must agree to the privacy policy again. You will be notified of any changes through an available contact method.
              </p>
            </section>

            <section id="contact">
              <h2>9. Contact us</h2>
              <p>
                If you have any questions regarding this policy, please contact us at legal@playbreach.fyi.
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <span>© 2026 Breach Interactive</span>

        <div>
            <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  )
}