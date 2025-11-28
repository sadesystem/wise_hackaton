// mitu tehingut näitame alguses
const INITIAL_COUNT = 5;
// mitu lisame iga "Load more" klikiga
const BATCH_SIZE = 10;

// Leia HTML elemendid
const listContainer = document.querySelector(".frame-105");
const loadMoreBtn = document.getElementById("loadMoreBtn");

if (!listContainer || !loadMoreBtn) {
  console.error("History: .frame-105 või #loadMoreBtn ei leitud");
}

// Näidisandmed – siia võid hiljem lisada rohkem/päris andmeid
// date: YYYY-MM-DD
const transactions = [
  {
    id: 1,
    name: "Bob Williams",
    amount: "28.27 EUR",
    date: "2025-11-28",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Sent",
    type: "Paid",
  },
  {
    id: 2,
    name: "Bob Williams",
    amount: "13.67 EUR",
    date: "2025-11-28",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Top up",
    type: "Paid",
  },
  {
    id: 3,
    name: "Bob Williams",
    amount: "2.01 EUR",
    date: "2025-11-27",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Scheduled",
    type: "Paid",
  },
  {
    id: 4,
    name: "Marge Williams",
    amount: "20.00 EUR",
    date: "2025-11-27",
    icon: "../assets/images/union.svg",
    iconAlt: "Sent",
    type: "Sent",
  },
  {
    id: 5,
    name: "Bob Williams",
    amount: "7.76 EUR",
    date: "2025-11-26",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Top up",
    type: "Paid",
  },
  // lisa veel tehinguid, et Load more oleks huvitav:
  {
    id: 6,
    name: "Bob Williams",
    amount: "5.20 EUR",
    date: "2025-11-26",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
  {
    id: 7,
    name: "Bob Williams",
    amount: "12.00 EUR",
    date: "2025-11-25",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
  {
    id: 8,
    name: "Bob Williams",
    amount: "3.40 EUR",
    date: "2025-11-25",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
  {
    id: 9,
    name: "Bob Williams",
    amount: "9.99 EUR",
    date: "2025-11-24",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
  {
    id: 10,
    name: "Bob Williams",
    amount: "1.99 EUR",
    date: "2025-11-24",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
  {
    id: 11,
    name: "Bob Williams",
    amount: "15.00 EUR",
    date: "2025-11-23",
    icon: "../assets/images/frame-34.svg",
    iconAlt: "Paid",
    type: "Paid",
  },
];

// sorteeri uuemad ette (kui vaja)
transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

let renderedCount = 0;
const renderedDateKeys = new Set();

function toYMD(d) {
  return d.toISOString().slice(0, 10);
}

// Tagastab Today / Yesterday / 24 Nov 2025
function formatDateLabel(dateStr) {
  const txDate = new Date(dateStr);
  const today = new Date();

  const txY = toYMD(txDate);
  const todayY = toYMD(today);

  const yest = new Date(today);
  yest.setDate(today.getDate() - 1);
  const yestY = toYMD(yest);

  if (txY === todayY) return "Today";
  if (txY === yestY) return "Yesterday";

  return txDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// loob date-headeri (sama välimus mis "Today" reaga)
function createDateHeader(label) {
  const wrapper = document.createElement("div");
  wrapper.className = "frame-104 date-header";

  const text = document.createElement("div");
  text.className = "today";
  text.textContent = label;

  wrapper.appendChild(text);
  return wrapper;
}

// üks tehingu rida
function createTransactionRow(tx) {
  const row = document.createElement("div");
  row.className = "transaction-buttons";

  row.innerHTML = `
    <div class="frame-62">
      <div class="recipient">
        <div class="icon-button">
          <div class="icon-and-alert">
            <img class="tx-icon" src="${tx.icon}" alt="${tx.iconAlt}" />
          </div>
        </div>
        <div class="frame-60">
          <div class="sarah-davies">${tx.name}</div>
          <div class="sent-2nd-sept-2022">
            ${tx.type} · ${formatDateLabel(tx.date)}
          </div>
        </div>
      </div>
      <div class="money-sent">
        <div class="_50-00-pln">${tx.amount}</div>
      </div>
    </div>
  `;

  return row;
}

// joonista järgmised N tehingut
function renderNext(count) {
  const slice = transactions.slice(renderedCount, renderedCount + count);

  slice.forEach((tx) => {
    // kui selle kuupäeva gruppi veel pole, lisa header
    if (!renderedDateKeys.has(tx.date)) {
      renderedDateKeys.add(tx.date);
      const header = createDateHeader(formatDateLabel(tx.date));
      listContainer.appendChild(header);
    }

    const row = createTransactionRow(tx);
    listContainer.appendChild(row);
  });

  renderedCount += slice.length;

  // kui rohkem tehinguid ei ole, peida nupp
  if (renderedCount >= transactions.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Käivitame kohe, sest script on body lõpus
if (listContainer && loadMoreBtn) {
  // esimese korraga näita alati 5
  renderNext(INITIAL_COUNT);

  // iga klikiga 10 lisaks
  loadMoreBtn.addEventListener("click", () => {
    renderNext(BATCH_SIZE);
  });
}
