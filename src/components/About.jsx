import { motion } from "framer-motion";
import Footer from "./footer";

// images
import AminaImg from "../assets/PICS/Amina.png";
import AnassImg from "../assets/PICS/Anass.png";
import HafsaImg from "../assets/PICS/Hafsa.png";
import HatimImg from "../assets/PICS/Hatim.png";
import HatimmImg from "../assets/PICS/Hatimm.png";
import IbrahimImg from "../assets/PICS/Ibrahim.png";
import LeilaImg from "../assets/PICS/Leila.png";
import MarouaneImg from "../assets/PICS/Marouane.png";
import MohamedImg from "../assets/PICS/Mohamed.png";
import NabilImg from "../assets/PICS/Nabil.png";
import OumaymaImg from "../assets/PICS/Oumayma.png";
import RiahbImg from "../assets/PICS/Riahb El khiat.png";
import RihabKhlifiImg from "../assets/PICS/Rihab El Khlifi.png";
import RiyadImg from "../assets/PICS/Riyad.png";
import SafaaImg from "../assets/PICS/Safaa.png";
import ZaidImg from "../assets/PICS/Zaid.png";

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 110, damping: 14 },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

// ========================
// TEAM DATA
// ========================

const teamMembers = [
    { id: 1, name: "Marouane Bnyiche", role: "Fondateur & PDG", dept: "founder", image: MarouaneImg },

    { id: 2, name: "Rihab El Khlifi", role: "Vice-Président", dept: "leadership", image: RihabKhlifiImg },
    { id: 3, name: "Zaid Ainebar", role: "Directeur Département", dept: "leadership", image: ZaidImg },

    // Design Graphique
    { id: 4, name: "Anass Aoulad Chbila", role: "Chef de département Design Graphique", dept: "design", image: AnassImg },
    { id: 8, name: "Hafsa Akazim", role: "Design Graphique", dept: "design", image: HafsaImg },

    // Cyber Sécurité
    { id: 5, name: "Ibrahim Mesmaoudi", role: "Chef de département Cybersécurité & Réseaux", dept: "cyber", image: IbrahimImg },
    { id: 9, name: "Nabil Jabour", role: " Chef de département Cybersécurité & Réseaux", dept: "cyber", image: NabilImg },
    { id: 12, name: "Riyad Koukji", role: "Cybersécurité & Réseaux", dept: "cyber", image: RiyadImg },
    { id: 14, name: "Rihab El Khiat", role: "Cybersécurité & Réseaux", dept: "cyber", image: RiahbImg },
    { id: 16, name: "Mohamed El Amiri", role: "Cybersécurité & Réseaux", dept: "cyber", image: MohamedImg },

    // FullStack Dev
    { id: 6, name: "Hatim Sedrati", role: "Chef de département FullStack Développement", dept: "dev", image: HatimImg },
    { id: 10, name: "Hatim Saddani", role: "FullStack Développement", dept: "dev", image: HatimmImg },

    // IA
    { id: 7, name: "Leila Bouachak", role: "Chef de département Intelligence Artificielle", dept: "ai", image: LeilaImg },
    { id: 11, name: "Amina Elkouch", role: "Intelligence Artificielle", dept: "ai", image: AminaImg },
    { id: 13, name: "Safaa El Hichou", role: "Intelligence Artificielle", dept: "ai", image: SafaaImg },
    { id: 15, name: "Oumayma El Ghouch", role: "Intelligence Artificielle", dept: "ai", image: OumaymaImg },
];

export default function FuturaTeamGallery() {
    const founder = teamMembers.find((m) => m.dept === "founder");
    const leadership = teamMembers.filter((m) => m.dept === "leadership");

    // Columns
    const departments = [
        { id: "design", label: "Design Graphique" },
        { id: "cyber", label: "Cybersécurité & Réseaux" },
        { id: "dev", label: "FullStack Dev" },
        { id: "ai", label: "Intelligence Artificielle" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-purple-700 text-white">
            <div className="mb-[70px]">
                {/* Header removed from here */}
            </div>

            {/* ====================== */}
            {/*      TITLE + PHOTO     */}
            {/* ====================== */}
            <section className="text-center pt-12">
                <h1 className="text-6xl font-bold tracking-wide mb-6">FUTURA Team</h1>
                <div className="w-[380px] h-[220px] bg-black/70 rounded-3xl mx-auto mb-10 flex items-center justify-center">
                    TEAM PHOTO
                </div>
            </section>

            {/* ====================== */}
            {/* FONDATEUR */}
            {/* ====================== */}
            <motion.div
                className="flex flex-col items-center mb-20"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="w-56 h-56 rounded-full border-4 border-purple-300 overflow-hidden mb-4">
                    <img src={founder.image} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold">{founder.name}</h3>
                <p className="text-purple-300">{founder.role}</p>
            </motion.div>

            {/* ====================== */}
            {/* LEADERSHIP */}
            {/* ====================== */}
            <motion.div
                className="flex justify-center gap-20 mb-20 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {leadership.map((m) => (
                    <motion.div key={m.id} variants={itemVariants} className="text-center">
                        <div className="w-44 h-44 rounded-full border-4 border-purple-300 overflow-hidden mb-3">
                            <img src={m.image} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold">{m.name}</h3>
                        <p className="text-purple-300 text-sm">{m.role}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* ====================== */}
            {/*   DEPARTMENTS GRID     */}
            {/* ====================== */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 px-6 pb-28">
                {departments.map((dept) => {
                    const members = teamMembers.filter((m) => m.dept === dept.id);
                    return (
                        <div key={dept.id} className="text-center">
                            <h3 className="text-xl font-bold mb-6 underline underline-offset-4">
                                {dept.label}
                            </h3>

                            {members.map((m) => (
                                <motion.div
                                    key={m.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="mb-10"
                                >
                                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-purple-300 overflow-hidden mb-3">
                                        <img src={m.image} className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-semibold text-sm">{m.name}</h4>
                                    <p className="text-purple-300 text-xs">{m.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
}
