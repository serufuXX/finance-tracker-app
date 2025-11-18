import Header from "./view/Components/Header";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-900 text-amber-100">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {/* SECTION 1 — Graphic*/}

        <section
          aria-label="Section with Graphic"
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="p-6 bg-inherit rounded-2xl shadow-sm border">
            <p className="text-lg font-semibold">Income Breakdown</p>
          </div>

          <div className="p-6 bg-inherit rounded-2xl shadow-sm border">
            <p className="text-lg font-semibold">Expenses Breakdown</p>
          </div>
        </section>

        {/* SECTION 2 — Total saving */}
        <section
          aria-label="Something дуже розумне"
          className="bg-inherit rounded-2xl shadow-sm border p-6"
        >
          <h2 className="text-2xl font-bold mb-6">Total Saving</h2>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="p-4 rounded-xl bg-inherit space-y-2 text-sm text-amber-100">
              <h3 className="text-xl font-semibold">January</h3>
              <p>Income</p>
              <p>Expenses</p>
              <p>Net</p>
            </li>
          </ul>
        </section>

        {/* SECTION 3 — таблички */}
        <section aria-label="Something дууууже розумне" className="space-y-12">
          {/* Income table */}
          <div className="overflow-x-auto bg-inherit rounded-2xl shadow-sm border p-6">
            <table className="w-full text-left border-collapse">
              <caption className="text-xl font-semibold mb-4 text-start">
                Income
              </caption>

              <thead className="bg-inherit">
                <tr>
                  <th className="p-3 font-medium">Select</th>
                  <th className="p-3 font-medium">Amount</th>
                  <th className="p-3 font-medium">Tags</th>
                  <th className="p-3 font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-inherit">
                  <td className="p-3">Something</td>
                  <td className="p-3">100000</td>
                  <td className="p-3">Something</td>
                  <td className="p-3">10000000000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Expenses table */}
          <div className="overflow-x-auto bg-inherit rounded-2xl shadow-sm border p-6">
            <table className="w-full text-left border-collapse">
              <caption className="text-xl font-semibold mb-4 text-start">
                Expenses
              </caption>

              <thead className="bg-inherit">
                <tr>
                  <th className="p-3 font-medium">Select</th>
                  <th className="p-3 font-medium">Amount</th>
                  <th className="p-3 font-medium">Tags</th>
                  <th className="p-3 font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-inherit">
                  <td className="p-3">Something</td>
                  <td className="p-3">100000</td>
                  <td className="p-3">Something</td>
                  <td className="p-3">10000000000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 border-t text-center text-sm text-gray-500">
        <p>made serufuXX</p>
        <p>my social media</p>
      </footer>
    </div>
  );
}

export default App;
