const allBtn = document.getElementById("all");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const cardContainer = document.getElementById("card-container");
const allIssue = document.getElementById("all-issues");
const myModal = document.getElementById("my_modal_1");
const modalTitle = document.getElementById("modal-title");
const modulOpen = document.getElementById("modul-open");
const modalUpdate = document.getElementById("modal-update");
const modulAuthor = document.getElementById("modul-author");
const dataLabel = document.getElementById("data-label");
const dataLabels = document.getElementById("data-labels");
const modulDescription = document.getElementById("modul-description");
const assignee = document.getElementById("assignee");
const modules = document.getElementById("modules");
const btnSearch = document.getElementById('btn-search')

let masterData = [];

function activateButton(activeBtn) {
  [allBtn, openBtn, closeBtn].forEach((btn) =>
    btn.classList.remove("btn-primary"),
  );
  activeBtn.classList.add("btn-primary");
}

function createCardHTML(element) {
  const isOpen = element.status === "open";
  const buttonColor = element.priority ;
 let buttonClass;

if (buttonColor === "high") {
  buttonClass = "bg-[#FEECEC] text-[#EF4444]";
} else if (buttonColor === "medium") {
  buttonClass = "bg-[#FFF6D1] text-[#F59E0B]";
} else {
  buttonClass = "bg-[#EEEFF2] text-[#9CA3AF]";
}
  
  const borderColor = isOpen ? "border-green-400" : "border-indigo-600";
  const statusImg = isOpen ? "assets/Open-Status.png" : "assets/Closed-Status.png";

  return `
        <div onclick= 'moduls(${element.id})' class="border-t-2 ${borderColor} card shadow mb-4 grid grid-cols-1">
            <div class="flex justify-between pl-5 pt-5 pr-5">
                <img src="${statusImg}" alt="status" />
                <button class="px-5 py-1 rounded-lg ${buttonClass}">${element.priority}</button>
            </div>
            <h2 class="text-lg font-bold mt-5 pl-5">${element.title}</h2>
            <p class="line-clamp-2 pl-5 pr-5 mt-3">${element.description.slice(0 , 60)}...</p>
            <div class="sm:flex gap-2 mt-3 p-5 ">
                <button class="btn btn-xs bg-[#FEECEC] rounded-2xl">
                    <img src="assets/BugDroid.png" alt="" />
                    <span class="text-sm text-[#F24B4B]">${element.labels[0] || "N/A"}</span>
                </button>
                <button class="btn btn-xs bg-[#FEECEC] rounded-2xl ">
                    <img src="assets/Vector.png" alt="" />
                    <span class="text-[#F24B4B]">${element.labels[1] || "N/A"}</span>
                </button>
            </div>
            <hr class="border-gray-300">
            <p class="p-5 text-xs text-gray-500">Created: ${element.createdAt}</p>
            <p class="pl-5 pr-5 pb-5 text-xs text-gray-400">Updated: ${element.updatedAt}</p>
        </div>`;
}

const displayData = (data) => {
  cardContainer.innerHTML = ""; // Purono card gulo muche fela
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = createCardHTML(element);
    cardContainer.appendChild(div);
  });
};

async function alldataLoad() {
  try {
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const result = await res.json();
    masterData = result.data;
    displayData(masterData);
  } catch (error) {
    console.error("Data load hote somossa hoyeche:", error);
  }
}

allBtn.addEventListener("click", function () {
  activateButton(allBtn);
  displayData(masterData);
  allIssue.innerText = masterData.length + " Issues";
});

openBtn.addEventListener("click", () => {
  activateButton(openBtn);
  const filtered = masterData.filter((item) => item.status === "open");
  displayData(filtered);
  allIssue.innerText = filtered.length + " Issues";
});

closeBtn.addEventListener("click", () => {
  activateButton(closeBtn);
  const filtered = masterData.filter((item) => item.status === "closed");
  displayData(filtered);
  allIssue.innerText = filtered.length + " Issues";
});
async function moduls(dataId) {
  myModal.showModal();
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${dataId}`,
  );
  const data = await res.json();
  const modulData = data.data;
  modalTitle.textContent = modulData.title;
  modulOpen.textContent = modulData.status;
  modulAuthor.textContent = modulData.author;
  modalUpdate.textContent = modulData.updatedAt;
  dataLabel.textContent = modulData.labels[0];
  dataLabels.textContent = modulData.labels[1];
  modulDescription.textContent = modulData.description;
  assignee.textContent = modulData.assignee;
  modules.textContent = modulData.priority;
}
btnSearch.addEventListener("click", () => {
  const inputSearch = document
    .getElementById("input-search")
    .value.trim().toLowerCase();

  const filteredData = masterData.filter((item) =>
    item.title.toLowerCase().includes(inputSearch)
  );

  displayData(filteredData);
  allIssue.innerText = filteredData.length + " Issues";
});

// Initial Load
alldataLoad();
