function App() {
  return (
    <>
      <header>
        <div>
          <img src="" alt="Finance Tracker logo" />
          <h1>Personal Finance Tracker</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#!">2025 Saving</a>
            </li>
            <li>
              <a href="#!">filter</a>
            </li>
            <li>
              <a href="#!">Income Breakdown</a>
            </li>
            <li>
              <a href="#!">Expenses Breakdown</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section aria-label="Something розумне">
          <p>graphic</p>
          <p>Income Breakdown graphic</p>
          <p>Expenses Breakdown graphic</p>
        </section>

        <section aria-label="Something дуже розумне">
          <h2>Total saving</h2>
          <ul>
            <li>
              <h3>January</h3>
              <p>Income</p>
              <p>Expenses</p>
              <p>Net</p>
            </li>
          </ul>
        </section>

        <section aria-label="Something дууууже розумне">
          <table>
            <caption>Income</caption>
            <thead>
              <tr>
                <th>Select</th>
                <th>Amount</th>
                <th>Tags</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>100000</td>
                <td>Something</td>
                <td>10000000000</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Expenses</caption>
            <thead>
              <tr>
                <th>Selest</th>
                <th>Amount</th>
                <th>Tags</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>100000</td>
                <td>Something</td>
                <td>10000000000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>made serufuXX</p>
        <p>my social media :</p>
      </footer>
    </>
  );
}

export default App;
