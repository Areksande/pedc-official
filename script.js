const milestonesGM = [
    "Umaakyat ng mga silya", "Lumalakad nang paurong", "Tumatakbo na hindi nadadapa",
    "Bumababa ng hagdan habang hawak ang isang kamay", "Umaakyat ng hagdan (hawak gabay)",
    "Umaakyat ng hagdan (salitan paa)", "Bumababa ng hagdan (salitan paa)",
    "Ginagalaw parte ng katawan", "Tumatalon", "Hinahagis bola paitaas",
    "Lumulundag 1-3 beses", "Tumatalon at umiikot", "Sumasayaw / hakbang sa sayaw"
];

const milestoneFM = [
    "Nagpapakita ng higit na pagkagusto sa paggamit ng particular na kamay",
    "Kinakabig ang mga bagay gamit ang hinlalaki at hintuturo",
    "Kinukuha ang mga bagay gamit ang hinlalaki at hintuturo",
    "Nilalagay/tinatanggal ang maliliit na bagay mula sa lalagyan",
    "Tinatanggal ang takip ng bote/lalagyan, inaalis ang balot ng mga pagkain",
    "Hinahawakan ang krayola gamit ang nakasarang palad",
    "Kusang gumuguhit-guhit",
    "Gumuguhit ng patayo at pahalang na marka",
    "Kusang gumuguhit ng bilog na hugis",
    "Gumuguhit ng larawan ng tao (ulo, mata, katawan, braso, kamay, daliri, hita, paa)",
    "Gumuguhit ng bahay gamit ang iba’t-ibang uri ng hugis (parisukat, tatsulok)"
];

const milestoneSHM = [
    "Pinapakain ang sarili ng mga pagkain tulad ng biskwit at tinapay (finger food)",
    "Pinapakain ang sarili ng ulam at kanin gamit ang mga daliri ngunit may natatapon pagkain",
    "Pinapakain ang sarili gamit ang kutsara ngunit may natatapong pagkain",
    "Pinapakain ang sarili gamit ang mga daliri na walang natatapong pagkain",
    "Pinapakain ang sarili gamit ang kutsara na walang natatapong pagkain",
    "Tumutulong sa paghawak ng baso/tasa sa pag-inom",
    "Umiinom sa baso ngunit may natatapon",
    "Umiinom sa baso na walang umaalalay",
    "Kumukuha ng inumin ng mag-isa",
    "Kumakaing hindi na kailangang subuan pa",
    "Binubuhos ang tubig (o anumang likido) mula sa pitsel na walang natatapon",
    "Naghahanda ng sariling pagkain/meryenda",
    "Naghahanda ng pagkain para sa nakababatang kapatid/ibang miyembro ng pamilya kung walang matanda sa bahay",
    "Nakikipagtulungan kung binibihisan (hal. itinataas ang mga kamay/paa)",
    "Hinuhubad ang shorts na may garter",
    "Hinuhubad ang sando",
    "Binibihisan ang sarili na walang tumutulong, maliban sa pagbubutones at pagtatali",
    "Binibihisan ang sarili na walang tumutulong kasama na ang pagbubutones at pagtatali",
    "Ipinapakita o Ipinahihiwatig na naihi o nadumi sa shorts",
    "Pinapaalam sa tagapag-alaga ang pangangailangang umihi o dumumi upang makapunta sa tamang lugar (hal. banyo, CR)",
    "Pumupunta sa tamang lugar upang umihi o dumumi ngunit paminsan-minsan ay may pagkakataong hindi mapigilang maihi o madumi sa shorts",
    "Matagumpay na pumupunta sa tamang lugar upang umihi o dumumi",
    "Pinupunasan ang sarili pagkatapos dumumi",
    "Nakikipagtulungan kung pinapaliguan (hal. kinukuskos ang mga braso)",
    "Naliligo ng walang tumutulong",
    "Naghuhugas at nagpupunas ng mga kamay ng wala ng tumutulong",
    "Naghihilamos ng mukha ng walang tumutulong"
];

const milestoneRLM = [
    "Tinuturo ang mga kapamilya o pamilyar na bagay kapag ipinaturo",
    "Tinuturo ang 5 parte ng katawan kung inutusan",
    "Tinuturo ang 5 napangalanang larawan ng mga bagay",
    "Sumusunod sa isang lebel na utos na may simpleng pang ukol (hal.sa ibabaw, sa ilalim)",
    "Sumusunod sa dalawang lebel na utos na may simpleng pang ukol"
];

const milestonesEL = [
    "Gumagamit ng 5 -20 nakikilalang salita",
    "Napapangalanan ang mga bagay na nakikita sa larawan (4)",
    "Gumagamit ng 2 – 3 kombinasyon ng pandiwa-pantangi (verb-noun combinations) {hal. hingi ng pera}",
    "Gumagamit ng panghalip (hal. ako, akin)",
    "Nagsasalita sa tamang pangungusap na may 2 – 3 salita ",
    "Kunukuwento ang mga katatapos na karanasan (kapag tinatanong/diniktahan) na naayon sa pagkakasunod-sunod ng pangyayari gamit ang mga salitang tumutukoy sa pangnakaraan (past tense)",
    "Nagtatanong ng ano",
    "Nagtatanong ng sino at bakit",
];

const milestonesCM = [
    "Tinitingnan ang direksyon ng nahuhulog na bagay",
    "Hinahanap ang mga bagay na bahagyang nakatago",
    "Hinahanap ang mga bagay na lubusang nakatago",
    "Binibigay ang bagay ngunit hindi ito binibitiwan",
    "Ginagaya ang mga kilos na kakakita pa lamang",
    "Naglalaro ng kunwa-kunwarian",
    "Tinutugma ang mga bagay",
    "Tinutugma ang 2 – 3 kulay",
    "Tinutugma ang mga larawan",
    "Nakikilala ang magkakapareho at magkakaibang hugis",
    "Inaayos ang mga bagay ayon sa 2 katangian (hal. laki at kulay)",
    "Pinapangalanan ang 4 – 6 na kulay",
    "Inaayos ang mga bagay mula sa pinakamaliit hanggang sa pinakamalaki",
    "Gumuguhit/ginagaya ang isang disenyo",
    "Nakakabuo ng isang simpleng puzzle",
    "Pinapangalanan ang 3 hayop o gulay kapag tinanong",
    "Sinasabi ang mga gamit ng mga bagay sa bahay",
    "Naiintindihan ang makakasalungat na mga salita sa pamamagitan ng pagkumpleto ng pangungusap (hal. Ang aso ay malaki, ang daga ay _____)",
    "Nasasabi kung ano ang mali sa larawan (hal. Ano ang mali sa Larawan?)",
    "Tinuturo ang kaliwa at kanan ng bahagi ng katawan",
    "Tinutugma ang malalaki at maliliit na mga titik"
];

const milestoneSEM = [
    "Lumalapit sa mga hindi kakilala ngunit sa una ay maaaring maging mahiyain o hindi mapalagay",
    "Natutuwang nanonood ng mga ginagawa ng mga tao o hayop sa malapit na lugar",
    "Naglalarong mag-isa ngunit gustong malapit sa mga pamilyar na nakatatanda o kapatid",
    "Tumatawa/tumitili nang malakas sa paglalaro",
    "Naglalaro ng “bulaga",
    "Pinapagulong ang bola sa kalaro o tagapag-alaga",
    "Niyayakap ang mga laruan",
    "Ginagaya ang mga ginagawa ng mga nakatatanda (hal. pagluluto, paghuhugas)",
    "Marunong maghintay (hal. sa paghuhugas ng kamay, sa pagkuha ng pagkain)",
    "Humihingi ng permiso na laruin ang laruan na ginagamit ng ibang bata",
    "Pinahihiram ang sariling laruan sa iba",
    "Naglalaro ng maayos sa mga pang-grupong laro (hal. hindi nandadaya para manalo)",
    "Binabantayan ang mga pag-aari ng may determinasyon",
    "Nagpupursige kung may problema o hadlang sa kanyang gusto",
    "Interesado sa kanyang kapaligiran ngunit alam kung kalian kailangang huminto sa pagtatanong",
    "Nasasabi ang nararamdaman ng iba",
    "Inaalo/inaaliw ang mga kalaro o kapatid na may problema",
    "Nakikipagtulungan sa mga pang-grupong sitwasyon upang maiwasan ang mga away o problema",
    "Naikukwento ang mga mabigat na nararamdaman (hal. galit, lungkot)",
    "Gumagamit ng mga kilos na nararapat sa kultura na hindi na hinihiling/finifiktahan (hal. pagmamano, paghalik)",
    "Nagpapakita ng respeto sa nakatatanda gamit ang “Nang”, “Nong”, “Opo”, “Po” (o anumang katumbas nito) sa halip na kanilang unang pangalan",
    "Tumutulong sa mga gawaing pambahay (hal. Nagpupunas ng mesa, nagdidilig ng mga halaman)",
    "Responsableng nagbabantay sa mga nakababatang kapatid/ibang miyembro ng pamilya",
    "Tinatanggap ang isang kasunduang ginawa ng tagapag-alaga (hal. lilinisin muna ang kuwarto bago maglaro sa labas"
];

let batchData = [];

window.onload = function () {
    const saved = localStorage.getItem("ecdBatchData");
    if (saved) {
        batchData = JSON.parse(saved);
        updateSidebar();
    }
};


// Initialize Tables
function initTables(list, containerId, checkClass, rawId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ''; // Clear existing content
    list.forEach((m, i) => {
        container.innerHTML += `
            <tr>
                <td width="12">${i + 1}</td>
                <td>${m}</td>
                <td width="5" class="center">
                    <input type="checkbox" class="${checkClass}" onchange="updateDomainUI('${checkClass}', '${rawId}')"style="width: 30px; height: 20px;">
                </td>
            </tr>`;
    });
}

// SCALED SCORE EQUIVALENT OF RAW SCORES TABLE CHILD'S RECORD 2
const scaledScoreTables = {
    "4.1-5.0": {
        grossMotor: {
            1: [0, 5], 2: [6, 6], 3: [null, null], 4: [7, 7], 5: [8, 8],
            6: [null, null], 7: [9, 9], 8: [10, 10], 9: [null, null], 10: [11, 11],
            11: [12, 12], 12: [null, null], 13: [13, 13], 14: [null, null]
        },
        fineMotor: {
            1: [0, 3], 2: [4, 4], 3: [null, null], 4: [5, 5], 5: [6, 6],
            6: [null, null], 7: [7, 7], 8: [null, null], 9: [8, 8], 10: [9, 9],
            11: [null, null], 12: [10, 10], 13: [null, null], 14: [11, 11]
        },
        selfHelp: {
            1: [0, 15], 2: [16, 16], 3: [17, 17], 4: [18, 18], 5: [19, 19],
            6: [20, 20], 7: [null, null], 8: [21, 21], 9: [22, 22], 10: [23, 23],
            11: [24, 24], 12: [25, 25], 13: [26, 26], 14: [27, 27]
        },
        receptiveLanguage: {
            1: [0, 1], 2: [null, null], 3: [2, 2], 4: [null, null], 5: [null, null],
            6: [3, 3], 7: [null, null], 8: [null, null], 9: [4, 4], 10: [null, null],
            11: [5, 5], 12: [null, null], 13: [null, null]
        },
        expressiveLanguage: {
            1: [null, null], 2: [0, 5], 3: [null, null], 4: [null, null], 5: [null, null],
            6: [null, null], 7: [null, null], 8: [7, 7], 9: [null, null], 10: [null, null],
            11: [8, 8], 12: [null, null], 13: [null, null], 14: [null, null], 15: [null, null],
            16: [null, null]
        },
        cognitive: {
            1: [0, 8], 2: [1, 1], 3: [2, 3], 4: [4, 4], 5: [5, 5],
            6: [7, 7], 7: [8, 8], 8: [9, 10], 9: [11, 11], 10: [12, 12],
            11: [13, 14], 12: [15, 15], 13: [16, 17], 14: [18, 18], 15: [19, 20],
            16: [21, 21]
        },
        socialEmotional: {
            1: [0, 13], 2: [14, 14], 3: [15, 15], 4: [16, 16], 5: [17, 17],
            6: [null, null], 7: [18, 18], 8: [19, 19], 9: [20, 20], 10: [21, 21],
            11: [22, 22], 12: [23, 23], 13: [24, 24], 14: [null, null]
        }
    },
    "5.1-5.11": {
        grossMotor: {
            1: [0, 10], 2: [null, null], 3: [null, null], 4: [11, 11], 5: [null, null],
            6: [null, null], 7: [12, 12], 8: [null, null], 9: [null, null], 10: [null, null],
            11: [13, 13]
        },
        fineMotor: {
            1: [0, 5], 2: [null, null], 3: [6, 6], 4: [null, null], 5: [7, 7],
            6: [null, null], 7: [8, 8], 8: [9, 9], 9: [null, null], 10: [10, 10],
            11: [null, null], 12: [11, 11]
        },
        selfHelp: {
            1: [null, null], 2: [0, 19], 3: [20, 20], 4: [21, 21], 5: [null, null],
            6: [22, 22], 7: [23, 23], 8: [null, null], 9: [24, 24], 10: [25, 25],
            11: [null, null], 12: [26, 26], 13: [27, 27]
        },
        receptiveLanguage: {
            1: [0, 2], 2: [null, null], 3: [null, null], 4: [3, 3], 5: [null, null],
            6: [null, null], 7: [null, null], 8: [4, 4], 9: [null, null], 10: [null, null],
            11: [5, 5]
        },
        expressiveLanguage: {
            1: [null, null], 2: [null, null], 3: [null, null], 4: [null, null], 5: [null, null],
            6: [0, 7], 7: [null, null], 8: [null, null], 9: [null, null], 10: [null, null],
            11: [8, 8], 12: [null, null], 13: [null, null]
        },
        cognitive: {
            1: [0, 9], 2: [10, 10], 3: [11, 11], 4: [12, 12], 5: [13, 13],
            6: [14, 14], 7: [15, 15], 8: [16, 16], 9: [17, 17], 10: [18, 18],
            11: [19, 19], 12: [20, 20], 13: [21, 21]
        },
        socialEmotional: {
            1: [0, 15], 2: [16, 16], 3: [17, 17], 4: [null, null], 5: [18, 18],
            6: [19, 19], 7: [20, 20], 8: [null, null], 9: [21, 21], 10: [22, 22],
            11: [23, 23], 12: [null, null], 13: [24, 24]
        }
    }
};


const overallStandardScoreTable = {
    29: 37, 30: 38, 31: 40, 32: 41, 33: 43, 34: 44, 35: 45, 36: 47, 37: 48, 38: 50,
    39: 51, 40: 53, 41: 54, 42: 56, 43: 57, 44: 59, 45: 60, 46: 62, 47: 63, 48: 65,
    49: 66, 50: 67, 51: 69, 52: 70, 53: 72, 54: 73, 55: 75, 56: 76, 57: 78, 58: 79,
    59: 81, 60: 82, 61: 83, 62: 85, 63: 86, 64: 88, 65: 89, 66: 91, 67: 92, 68: 94,
    69: 95, 70: 97, 71: 98, 72: 100, 73: 101, 74: 103, 75: 104, 76: 105, 77: 107, 78: 108,
    79: 110, 80: 111, 81: 113, 82: 114, 83: 116, 84: 117, 85: 119, 86: 120, 87: 122, 88: 123,
    89: 124, 90: 126, 91: 127, 92: 129
};

// Domain configuration with max values and table keys
const domains = [
    { prefix: 'gm', tableKey: 'grossMotor', chkClass: 'gm-chk', rawId: 'gm-raw' },
    { prefix: 'fm', tableKey: 'fineMotor', chkClass: 'fm-chk', rawId: 'fm-raw' },
    { prefix: 'shm', tableKey: 'selfHelp', chkClass: 'shm-chk', rawId: 'shm-raw' },
    { prefix: 'rlm', tableKey: 'receptiveLanguage', chkClass: 'rlm-chk', rawId: 'rlm-raw' },
    { prefix: 'el', tableKey: 'expressiveLanguage', chkClass: 'el-chk', rawId: 'el-raw' },
    { prefix: 'cm', tableKey: 'cognitive', chkClass: 'cm-chk', rawId: 'cm-raw' },
    { prefix: 'sem', tableKey: 'socialEmotional', chkClass: 'sem-chk', rawId: 'sem-raw' }
];

// Function to determine age range from age string
function getAgeRange(ageString) {
    if (!ageString) return "4.1-5.0";

    const parts = ageString.split('.');
    if (parts.length < 2) return "4.1-5.0";

    const years = parseInt(parts[0]);
    const months = parseInt(parts[1]);

    if (years < 4 || (years === 4 && months < 1)) return "4.1-5.0";
    if (years === 4 && months >= 1 && months <= 12) return "4.1-5.0";
    if (years === 5 && months >= 1 && months <= 11) return "5.1-5.11";
    if (years > 5 || (years === 5 && months >= 12)) return "5.1-5.11";

    return "4.1-5.0";
}

// Function to get scaled score from table based on raw score and age
function getScaledScoreFromTable(domainKey, rawScore, ageRange) {
    const table = scaledScoreTables[ageRange]?.[domainKey];
    if (!table) return Math.round((rawScore / getMaxForDomain(domainKey)) * 18) + 1;

    for (let scaled = 1; scaled <= 19; scaled++) {
        const range = table[scaled];
        if (range && range[0] !== null && range[1] !== null) {
            if (rawScore >= range[0] && rawScore <= range[1]) {
                return scaled;
            }
        }
    }

    const highestScaled = Math.max(...Object.keys(table).filter(k => table[k] && table[k][0] !== null).map(Number));
    if (highestScaled) {
        const highestRange = table[highestScaled];
        if (rawScore > highestRange[1]) {
            return highestScaled + 1;
        }
    }

    return 1;
}

// Helper to get max raw score for a domain
function getMaxForDomain(domainKey) {
    const maxMap = {
        grossMotor: 13,
        fineMotor: 11,
        selfHelp: 27,
        receptiveLanguage: 5,
        expressiveLanguage: 8,
        cognitive: 21,
        socialEmotional: 24
    };
    return maxMap[domainKey] || 18;
}

// Update domain UI when checkboxes change
function updateDomainUI(chkClass, rawId) {
    const domain = domains.find(d => d.chkClass === chkClass);
    if (!domain) return;

    // Count checked boxes
    const checkboxes = document.querySelectorAll(`.${chkClass}`);
    const raw = Array.from(checkboxes).filter(c => c.checked).length;

    // Update Raw Score Display
    const rawDisplay = document.getElementById(rawId);
    if (rawDisplay) rawDisplay.innerText = raw;

    let ageString = document.getElementById('pAge').value;
    const ageRange = getAgeRange(ageString);

    // FIX: Check if raw score is 0, then set scaled to 0
    let scaled = 0;
    if (raw > 0) {
        scaled = getScaledScoreFromTable(domain.tableKey, raw, ageRange);
        scaled = Math.max(1, Math.min(19, scaled));
    }

    // Calculate Standard Score
    // FIX: If scaled is 0, standard score should be 0
    let stdScore = 0;
    if (scaled > 0) {
        stdScore = Math.round(55 + (scaled * 2.5));
    }

    // Update displays
    const scaledEl = document.getElementById(`${domain.prefix}-scaled`);
    const stdEl = document.getElementById(`${domain.prefix}-std`);
    const interpEl = document.getElementById(`${domain.prefix}-interp`);

    if (scaledEl) scaledEl.innerText = scaled;
    if (stdEl) stdEl.innerText = stdScore;

    // FIX: Update interpretation based on std score
    if (stdScore > 0) {
        if (interpEl) interpEl.innerText = getInterp(stdScore);
    } else {
        if (interpEl) interpEl.innerText = "No milestones achieved";
    }

    updateOverallSummary();
}

function autoComputeAge() {
    const birthVal = document.getElementById('pBirth').value;
    if (!birthVal) return;

    const birth = new Date(birthVal);
    const today = new Date();

    let y = today.getFullYear() - birth.getFullYear();
    let m = today.getMonth() - birth.getMonth();
    let d = today.getDate() - birth.getDate();

    if (d < 0) {
        m--;
        d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (m < 0) {
        y--;
        m += 12;
    }

    const ageString = `${y}.${m}.${d}`;
    document.getElementById('pAge').value = ageString;

    // Update all domain age displays
    updateAllAgeDisplays(ageString);

    // Update labels
    const labels = document.querySelectorAll('.summary-line span:first-child');
    labels.forEach(label => {
        if (label.innerText.includes("Scaled")) {
            label.innerText = `Sum Scaled (${y}.${m}):`;
        }
    });

    // Recalculate all domains with new age
    recalculateAllDomains();
}

// New function to update all age displays
function updateAllAgeDisplays(ageString) {
    const domains = ['gm', 'fm', 'shm', 'rlm', 'el', 'cm', 'sem'];
    domains.forEach(prefix => {
        const ageDisplay = document.getElementById(`${prefix}-age-display`);
        if (ageDisplay) {
            ageDisplay.innerText = ageString;
        }
    });
}


function recalculateAllDomains() {
    domains.forEach(d => updateDomainUI(d.chkClass, d.rawId));
}

function getInterp(std) {
    if (std >= 130) return "Suggests Highly advanced development";
    if (std >= 120) return "Suggests advanced development";
    if (std >= 80) return "Average overall development";
    if (std >= 70) return "Suggest slight delay in overall development";
    return "Suggest significant delay in overall development";
}

function updateOverallSummary() {
    let totalRaw = 0;
    let totalScaled = 0;

    // Calculate totals from each domain
    domains.forEach(domain => {
        const raw = parseInt(document.getElementById(`${domain.prefix}-raw`)?.innerText) || 0;
        const scaled = parseInt(document.getElementById(`${domain.prefix}-scaled`)?.innerText) || 0;

        totalRaw += raw;
        totalScaled += scaled;
    });

    // FIX: Handle case when all scaled scores are 0
    let overallStd = 0;
    let overallInterp = "No milestones achieved";

    if (totalScaled > 0) {
        // Lookup the Standard Score based on the Sum of Scaled Scores
        if (totalScaled < 29) {
            overallStd = 35; // Floor value if sum is extremely low
        } else if (totalScaled > 92) {
            overallStd = 130; // Ceiling value if sum is extremely high
        } else {
            overallStd = overallStandardScoreTable[totalScaled] || 0;
        }
        overallInterp = getInterp(overallStd);
    }

    // Update the UI elements
    const totalRawEl = document.getElementById('totalRaw');
    const totalScaledEl = document.getElementById('totalScaled');
    const overallStdEl = document.getElementById('overallStd');
    const overallInterpEl = document.getElementById('overallInterp');

    if (totalRawEl) totalRawEl.innerText = totalRaw;
    if (totalScaledEl) totalScaledEl.innerText = totalScaled;
    if (overallStdEl) overallStdEl.innerText = overallStd;
    if (overallInterpEl) overallInterpEl.innerText = overallInterp;
}

// Save to batch function
function saveToBatch() {
    const name = document.getElementById('pName').value;
    const sex = document.getElementById('pSex').value;
    const age = document.getElementById('pAge').value;

    if (!name) return alert("Please enter the Learner's Name");
    if (!sex) return alert("Please select the Learner's Sex");

    // Helper to get domain data with check states
    function getDomainData(prefix, chkClass) {
        const checkboxes = document.querySelectorAll(`.${chkClass}`);
        const checks = Array.from(checkboxes).map(c => c.checked);
        const raw = checks.filter(c => c).length;
        const scaled = parseInt(document.getElementById(`${prefix}-scaled`)?.innerText) || 1;
        const std = parseInt(document.getElementById(`${prefix}-std`)?.innerText) || 55;
        const interp = document.getElementById(`${prefix}-interp`)?.innerText || "Significant Delay";

        return { raw, scaled, std, interp, checks };
    }

    const gm = getDomainData('gm', 'gm-chk');
    const fm = getDomainData('fm', 'fm-chk');
    const shm = getDomainData('shm', 'shm-chk');
    const rlm = getDomainData('rlm', 'rlm-chk');
    const el = getDomainData('el', 'el-chk');
    const cm = getDomainData('cm', 'cm-chk');
    const sem = getDomainData('sem', 'sem-chk');

    const totalScaledSum = gm.scaled + fm.scaled + shm.scaled + rlm.scaled + el.scaled + cm.scaled + sem.scaled;

    let totalStd = 0;
    if (totalScaledSum < 29) {
        totalStd = 35;
    } else if (totalScaledSum > 92) {
        totalStd = 130;
    } else {
        totalStd = overallStandardScoreTable[totalScaledSum] || 0;
    }

    const finalInterp = getInterp(totalStd);

    if (!confirm(`Add "${name}" to queue?\nStandard Score: ${totalStd}`)) return;

    const learner = {
        name, sex, age,
        ageRange: getAgeRange(age),
        gmRaw: gm.raw, gmScaled: gm.scaled, gmInterp: gm.interp, gmChecks: gm.checks,
        fmRaw: fm.raw, fmScaled: fm.scaled, fmInterp: fm.interp, fmChecks: fm.checks,
        shmRaw: shm.raw, shmScaled: shm.scaled, shmInterp: shm.interp, shmChecks: shm.checks,
        rlmRaw: rlm.raw, rlmScaled: rlm.scaled, rlmInterp: rlm.interp, rlmChecks: rlm.checks,
        elRaw: el.raw, elScaled: el.scaled, elInterp: el.interp, elChecks: el.checks,
        cmRaw: cm.raw, cmScaled: cm.scaled, cmInterp: cm.interp, cmChecks: cm.checks,
        semRaw: sem.raw, semScaled: sem.scaled, semInterp: sem.interp, semChecks: sem.checks,
        totalStd,
        finalInterp
    };

    batchData.push(learner);
    localStorage.setItem("ecdBatchData", JSON.stringify(batchData));
    updateSidebar();
    alert(`${name} added successfully!`);
}

// Initialize Tables on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initTables(milestonesGM, 'gm-rows', 'gm-chk', 'gm-raw');
    initTables(milestoneFM, 'fm-rows', 'fm-chk', 'fm-raw');
    initTables(milestoneSHM, 'shm-rows', 'shm-chk', 'shm-raw');
    initTables(milestoneRLM, 'rlm-rows', 'rlm-chk', 'rlm-raw');
    initTables(milestonesEL, 'el-rows', 'el-chk', 'el-raw');
    initTables(milestonesCM, 'cm-rows', 'cm-chk', 'cm-raw');
    initTables(milestoneSEM, 'sem-rows', 'sem-chk', 'sem-raw');

    const saved = localStorage.getItem("ecdBatchData");
    if (saved) {
        batchData = JSON.parse(saved);
        updateSidebar();
    }
});

function updateSidebar() {
    const queueElement = document.getElementById('studentQueue');
    if (!queueElement) return;

    queueElement.innerHTML = batchData.map((s, index) => `
        <div class="student-item">
            <b>${s.name}</b> (${s.sex}) <br>
            Age: ${s.age || "N/A"} <br>
            Standard Score: ${s.totalStd} <br>
            Interpretation: ${s.finalInterp}
            <br>
            <button onclick="deleteLearner(${index})"
                style="margin-top:5px;background:red;color:white;border:none;padding:4px 8px;cursor:pointer;">
                Delete
            </button>
        </div>
    `).join('');
}

function deleteLearner(index) {
    if (!confirm("Are you sure you want to delete this learner?")) return;
    batchData.splice(index, 1);
    localStorage.setItem("ecdBatchData", JSON.stringify(batchData));
    updateSidebar();
}








async function exportToExcel() {
    try {
        if (typeof ExcelJS === 'undefined') {
            alert("ExcelJS library not found!");
            return;
        }

        batchData.sort((a, b) => {
            // Sort by Sex: 'Male' comes before 'Female' alphabetically
            // If your values are 'M' and 'F', 'F' comes first, so we reverse it:
            if (a.sex !== b.sex) {
                return a.sex === "Male" ? -1 : 1;
            }
            // If sex is the same, sort alphabetically by name
            return a.name.localeCompare(b.name);
        });

        batchData.sort((a, b) => a.name.localeCompare(b.name));

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('ECD Checklist');


        // --- SHEET 2: SUMMARY REPORT ---
        // --- SHEET 2: SUMMARY REPORT ---
        const summarySheet = workbook.addWorksheet('Summary Report');

        // Define Headers: RS = Raw Score, SS = Scaled Score
        const summaryHeaders = [
            "PANGALAN NG MGA BATA", "EDAD", "KASARIAN",
            "Gross Motor (RS)", "GM (SS)",
            "Fine Motor (RS)", "FM (SS)",
            "Self Help (RS)", "SH (SS)",
            "Receptive Language (RS)", "RL (SS)",
            "Expressive Language (RS)", "EL (SS)",
            "Cognitive Domain (RS)", "CG (SS)",
            "Socio-Emotional (RS)", "SE (SS)",
            "TOTAL Sum Scaled Score", // Shifted up
            "STANDARD SCORE",
            "INTERPRETATION"
        ];

        // Style for Summary Header (Blue background, White text)
        const summaryHeaderStyle = {
            font: { bold: true, color: { argb: 'FFFFFF' } },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } },
            alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
            border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        };

        const summaryHeaderRow = summarySheet.addRow(summaryHeaders);
        summaryHeaderRow.height = 35;
        summaryHeaderRow.eachCell((cell) => { cell.style = summaryHeaderStyle; });

        // Add Student Data Rows
        batchData.forEach(student => {
            // Calculate Sum of Scaled Scores (SS)
            const sumSS = (student.gmScaled || 0) + (student.fmScaled || 0) +
                (student.shmScaled || 0) + (student.rlmScaled || 0) +
                (student.elScaled || 0) + (student.cmScaled || 0) +
                (student.semScaled || 0);

            // 2. Removed sumRS from rowData
            const rowData = [
                student.name.toUpperCase(),
                student.age || "N/A",
                (student.sex === "M" || student.sex === "MALE" ? "MALE" : "FEMALE"),

                // Domain Scores: Raw (RS) then Scaled (SS)
                student.gmRaw || 0, student.gmScaled || 0,
                student.fmRaw || 0, student.fmScaled || 0,
                student.shmRaw || 0, student.shmScaled || 0,
                student.rlmRaw || 0, student.rlmScaled || 0,
                student.elRaw || 0, student.elScaled || 0,
                student.cmRaw || 0, student.cmScaled || 0,
                student.semRaw || 0, student.semScaled || 0,

                // Totals and Interpretation (Note: sumRS is gone)
                sumSS,                       // Total Scaled Score (Now Col 18)
                student.totalStd || 0,       // Standard Score
                student.finalInterp || "N/A" // Interpretation
            ];

            const newRow = summarySheet.addRow(rowData);

            // Apply borders and alignment
            newRow.eachCell((cell, colNumber) => {
                // 1. Apply Borders and Alignment to EVERY cell
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                cell.alignment = { vertical: 'middle', horizontal: 'center' };

                // 2. Highlight the final summary columns (Total RS, Total SS, Std Score, Interpretation)
                // If you have 3 profile cols + 14 domain cols, summary starts at col 18
                if (colNumber >= 18) {
                    cell.font = { bold: true };
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF2F2F2' } // Light grey highlight
                    };
                }
            });

            // Keep names left-aligned for readability
            newRow.getCell(1).alignment = { horizontal: 'left', vertical: 'middle' };
        });
        summarySheet.columns.forEach((col, i) => {
            if (i === 0) {
                col.width = 40; // Name column (needs to be wide)
            }
            else if (i === 1 || i === 2) {
                col.width = 12; // Age and Gender
            }
            else if (i >= 3 && i <= 16) {
                col.width = 8;  // Domain RS and SS columns (can be narrow)
            }
            else if (i === 17 || i === 18 || i === 19) {
                col.width = 18; // TOTAL RS, TOTAL SS, and STANDARD SCORE
            }
            else if (i === 20) {
                col.width = 45; // INTERPRETATION (needs most space)
            }
            else {
                col.width = 10;
            }
        });




        // 1. Column Setup
        worksheet.getColumn(1).width = 5;
        worksheet.getColumn(2).width = 45;
        const studentStartCol = 3;

        // 2. Styles
        const headerStyle = {
            alignment: { textRotation: 90, vertical: 'middle', horizontal: 'center', wrapText: true },
            font: { bold: true, size: 10 },
            border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE9EEF5' } }
        };

        const scoreLabelStyle = {
            font: { bold: true },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF00' } }, // Yellow
            border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        };

        worksheet.getRow(1).height = 180;

        // 3. Write All Student Names
        batchData.forEach((student, index) => {
            const colNum = studentStartCol + index;

            const labelCol = 2;
            const nameLabel = worksheet.getCell(1, labelCol);
            nameLabel.value = "PANGALAN NG MGA BATA";

            const ageLabel = worksheet.getCell(2, labelCol);
            ageLabel.value = "EDAD";

            const genderLabel = worksheet.getCell(3, labelCol)
            genderLabel.value = "KASARIAN";

            [1, 2, 3].forEach(rowNum => {
                const cell = worksheet.getCell(rowNum, labelCol);

                cell.font = {
                    bold: true,
                    name: 'Arial',
                    size: 10
                };

                cell.alignment = {
                    vertical: 'middle',
                    horizontal: 'center',
                    wrapText: true // Helps if "PANGALAN NG MGA BATA" is long
                };

                // Add borders to make it look like a professional table
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });

            // 3. Set Column B width so the text isn't cramped
            worksheet.getColumn(labelCol).width = 50;

            // 1. Write Name to Row 1
            const nameCell = worksheet.getCell(1, colNum);
            nameCell.value = `${index + 1}. ${student.name.toUpperCase()}`;
            nameCell.style = headerStyle; // Keeps the 90-degree rotation

            // 2. Write Age to Row 2
            const ageCell = worksheet.getCell(2, colNum);
            const ageValue = student.age ? student.age : "N/A";
            ageCell.value = `${ageValue}`;

            //3rd row
            // 3. Write Sex to Row 3
            const sexCell = worksheet.getCell(3, colNum);
            // Match the dropdown values "M" or "F"
            // If student.sex is "M", show "Male". Otherwise, show "Female  "
            sexCell.value = (student.sex === "M") ? "Male" : "Female";

            sexCell.style = headerStyle;
            // Apply style to Age cell as well so it matches the rotation
            ageCell.style = headerStyle;

            // 3. Set Column Width
            worksheet.getColumn(colNum).width = 4;
        });

        // Adjust Row Heights to fit the rotated text
        worksheet.getRow(1).height = 150; // Height for Name
        worksheet.getRow(2).height = 35;  // Height for Age

        // 4. Corrected Domain Mapping
        let currentRow = 4;
        const allDomains = [
            { title: "GROSS MOTOR DOMAIN", list: milestonesGM, key: "gmChecks", scaledKey: "gmScaled" },
            { title: "FINE MOTOR DOMAIN", list: milestoneFM, key: "fmChecks", scaledKey: "fmScaled" },
            { title: "SELF-HELP DOMAIN", list: milestoneSHM, key: "shmChecks", scaledKey: "shmScaled" },
            { title: "RECEPTIVE LANGUAGE DOMAIN", list: milestoneRLM, key: "rlmChecks", scaledKey: "rlmScaled" },
            { title: "EXPRESSIVE LANGUAGE DOMAIN", list: milestonesEL, key: "elChecks", scaledKey: "elScaled" },
            { title: "COGNITIVE DOMAIN", list: milestonesCM, key: "cmChecks", scaledKey: "cmScaled" },
            { title: "SOCIO-EMOTIONAL DOMAIN", list: milestoneSEM, key: "semChecks", scaledKey: "semScaled" }
        ];

        allDomains.forEach(domain => {
            if (!domain.list || domain.list.length === 0) return;

            // Domain Header Row
            worksheet.mergeCells(currentRow, 1, currentRow, 2);
            const dCell = worksheet.getCell(currentRow, 1);
            dCell.value = domain.title;
            dCell.font = { bold: true };
            dCell.alignment = { horizontal: 'center' };
            dCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } };
            currentRow++;

            domain.list.forEach((milestone, mIdx) => {
                const row = worksheet.getRow(currentRow);
                row.getCell(1).value = mIdx + 1;
                row.getCell(2).value = milestone;
                row.getCell(2).alignment = { wrapText: true };

                batchData.forEach((student, sIdx) => {
                    const colNum = studentStartCol + sIdx;
                    const cell = row.getCell(colNum);

                    // Correctly referencing the check arrays saved in saveToBatch()
                    if (student[domain.key] && student[domain.key][mIdx]) {
                        cell.value = "✓";
                        cell.alignment = { horizontal: 'center' };
                    }
                    cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
                });
                currentRow++;
            });
        });

        // 5. ADD SUMMARY SCORING ROWS AT THE BOTTOM
        currentRow++; // Add a gap

        // Row for Sum of Scaled Scores
        const sumRow = worksheet.getRow(currentRow);
        sumRow.getCell(2).value = "SUM OF SCALED SCORES";
        sumRow.getCell(2).style = scoreLabelStyle;

        // Row for Standard Score
        const stdRow = worksheet.getRow(currentRow + 1);
        stdRow.getCell(2).value = "STANDARD SCORE";
        stdRow.getCell(2).style = scoreLabelStyle;

        // Row for Interpretation
        const interpRow = worksheet.getRow(currentRow + 2);
        interpRow.getCell(2).value = "INTERPRETATION";
        interpRow.getCell(2).style = scoreLabelStyle;

        batchData.forEach((student, sIdx) => {
            const colNum = studentStartCol + sIdx;

            // Calculate Sum of Scaled Scores for this student
            const totalScaled = (student.gmScaled || 0) + (student.fmScaled || 0) +
                (student.shmScaled || 0) + (student.rlmScaled || 0) +
                (student.elScaled || 0) + (student.cmScaled || 0) +
                (student.semScaled || 0);

            sumRow.getCell(colNum).value = totalScaled;
            stdRow.getCell(colNum).value = student.totalStd;
            interpRow.getCell(colNum).value = student.finalInterp;

            // Add vertical alignment to interpretation so it fits
            interpRow.getCell(colNum).alignment = { textRotation: 90, vertical: 'middle', horizontal: 'center' };
        });

        // 6. Final Download Trigger
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `ECD_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(anchor);

    } catch (error) {
        console.error("Export Error:", error);
        alert("Export failed: " + error.message);
    }
}


