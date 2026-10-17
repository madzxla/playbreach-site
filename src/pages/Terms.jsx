import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="page">
      <Header />

      <main className="legal-page">
        <div className="legal-header">
          <h1>Terms</h1>
          <p>
            We encourage you to read our Terms carefully. This covers all use of Breach Interactive Online Services.
          </p>
          <small>10/17/2026</small>
        </div>

        <div className="legal-layout">
          <aside className="legal-navigation">
            <a href="#introduction">Introduction</a>
            <a href="#accounts">Accounts</a>
            <a href="#acceptable-use">Acceptable use</a>
            <a href="#liability">Liability</a>
            <a href="#termination">Termination</a>
            <a href="#changes">Changes</a>
            <a href="#contact">Contact us</a>
          </aside>

          <article className="legal-content">
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
The following terms regulate your access to our services and how you may use them. Accessing our services and using them, you agree to the following terms.
              </p>
            </section>

            <section id="accounts">
              <h2>2. Accounts</h2>
              <p>
To gain access to Breach Interactive Online Services, you have to create an account in our system. This involves linking your Discord account with your Roblox account using OAuth 2.0.
              </p>
              <p>
You are responsible for the actions that occur while using your account.
              </p>
                            <p>
Alternate accounts are strictly prohibited.
              </p>
            </section>

            <section id="acceptable-use">
              <h2>3. Acceptable use</h2>
              <p>Engaging in the following activities is strictly prohibited and will result in account termination:</p>

              <ul>
                <li>Using our services for illegal means or motives</li>
                <li>Attempt to gain unauthorized access to our service</li>
                <li>Attempt to disrupt the service for others</li>
              </ul>
            </section>

            <section id="liability">
              <h2>4. Liability</h2>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS, COPYRIGHT HOLDERS, OR PROVIDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY (INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, DATA LOSS, OR LOSS OF PROFITS), WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

              </p>
            </section>

            <section id="termination">
              <h2>5. Termination</h2>
              <p>
                Accounts who violate our terms will be terminated without prior warning. We encourage all of our users to use Breach Interactive Online Services fairly to avoid such consequences.
              </p>
            </section>

            <section id="changes">
              <h2>6. Changes</h2>
              <p>
                We may make changes to these terms at any time. To continue to use our services, you must agree to the terms again. You will be notified of any changes through an available contact method.
              </p>
            </section>

            <section id="contact">
              <h2>7. Contact us</h2>
              <p>
                If you have any questions regarding these terms, please contact us at legal@playbreach.fyi.
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <span>© 2026 Breach Interactive</span>

        <div>
            <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}