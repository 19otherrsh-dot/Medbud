import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding MedBud database...\n");

  // Clean existing data
  await prisma.booking.deleteMany();
  await prisma.inquiry.deleteMany();
  await prisma.procedure.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.hospital.deleteMany();
  await prisma.agentProfile.deleteMany();
  await prisma.patientProfile.deleteMany();
  await prisma.user.deleteMany();

  console.log("🗑️  Cleared existing data\n");

  // ----- HOSPITALS -----
  const hospitals = await Promise.all([
    prisma.hospital.create({
      data: {
        name: "Apollo Hospitals",
        city: "Chennai",
        accreditations: ["JCI", "NABH"],
        description:
          "Asia's foremost integrated healthcare group. Pioneer in robotic surgery, organ transplant, and cardiac care. Treats 200,000+ international patients annually across 72 hospitals.",
        imageUrl: "/hospitals/apollo-chennai.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Medanta - The Medicity",
        city: "Gurugram",
        accreditations: ["JCI", "NABH"],
        description:
          "Founded by Dr. Naresh Trehan, India's most renowned cardiac surgeon. A 1,600-bed multi-specialty institute with 22 super-specialty departments and a dedicated international patient wing.",
        imageUrl: "/hospitals/medanta.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Fortis Memorial Research Institute",
        city: "Gurugram",
        accreditations: ["JCI", "NABH", "NABL"],
        description:
          "A 1,000-bed quaternary care hospital known for complex surgeries, advanced oncology, neurosciences, and a world-class bone marrow transplant program.",
        imageUrl: "/hospitals/fortis-gurugram.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Tata Memorial Hospital",
        city: "Mumbai",
        accreditations: ["NABH", "NABL"],
        description:
          "India's premier cancer treatment and research center. Pioneers in CAR-T cell therapy, proton beam therapy, and molecular oncology. Affiliated with Homi Bhabha National Institute.",
        imageUrl: "/hospitals/tata-memorial.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Max Super Speciality Hospital",
        city: "New Delhi",
        accreditations: ["NABH", "NABL"],
        description:
          "Part of Max Healthcare, India's second-largest hospital chain. Known for cardiac sciences, orthopedics, neurosciences, and bariatric surgery with dedicated Arabic-speaking coordinators.",
        imageUrl: "/hospitals/max-delhi.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Narayana Health",
        city: "Bangalore",
        accreditations: ["NABH"],
        description:
          "Founded by Dr. Devi Shetty, a pioneer of affordable cardiac surgery. Performs the highest number of heart surgeries in the world. Known for value-based healthcare at 50% lower costs.",
        imageUrl: "/hospitals/narayana-blr.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Manipal Hospitals",
        city: "Bangalore",
        accreditations: ["JCI", "NABH"],
        description:
          "One of India's largest healthcare networks with 30+ hospitals. Specializes in organ transplants, oncology, and robotic surgery. Strong telemedicine infrastructure for post-treatment follow-up.",
        imageUrl: "/hospitals/manipal-blr.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        city: "Mumbai",
        accreditations: ["JCI", "NABH"],
        description:
          "A state-of-the-art 750-bed multispecialty hospital. Known for advanced robotic surgery, da Vinci surgical systems, and comprehensive cancer treatment with IMRT and CyberKnife.",
        imageUrl: "/hospitals/kokilaben.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Aster Medcity",
        city: "Kochi",
        accreditations: ["JCI", "NABH"],
        description:
          "Kerala's largest quaternary care hospital. Specializes in cardiac sciences, neurosciences, organ transplant, and integrative medicine combining modern and Ayurvedic approaches.",
        imageUrl: "/hospitals/aster-kochi.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "BLK-Max Super Speciality Hospital",
        city: "New Delhi",
        accreditations: ["NABH", "NABL"],
        description:
          "A 700-bed tertiary care hospital in the heart of Delhi. Renowned for bone marrow transplants, liver transplants, and advanced oncology. Treats patients from 60+ countries.",
        imageUrl: "/hospitals/blk-max.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Global Hospital",
        city: "Chennai",
        accreditations: ["JCI", "NABH"],
        description:
          "India's leading center for liver and multi-organ transplantation. Pioneer in living donor liver transplant with a 95% success rate. Part of the IHH Healthcare group.",
        imageUrl: "/hospitals/global-chennai.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Fortis Escorts Heart Institute",
        city: "New Delhi",
        accreditations: ["NABH"],
        description:
          "One of India's most iconic cardiac care facilities. Has performed 100,000+ cardiac surgeries with outcomes matching Cleveland Clinic and Mayo Clinic standards.",
        imageUrl: "/hospitals/fortis-escorts.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Amrita Hospital",
        city: "Faridabad",
        accreditations: ["NABH"],
        description:
          "India's largest private hospital with 2,600 beds. Features an AI-integrated diagnostic center, 81 specialties, and a dedicated wing for international patients with multilingual staff.",
        imageUrl: "/hospitals/amrita.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Christian Medical College",
        city: "Vellore",
        accreditations: ["NABH"],
        description:
          "A legendary teaching hospital founded in 1900. Known for complex neurosurgery, haematology, and bone marrow transplants. One of India's most trusted institutions for rare diseases.",
        imageUrl: "/hospitals/cmc-vellore.jpg",
      },
    }),
    prisma.hospital.create({
      data: {
        name: "Rajagiri Hospital",
        city: "Kochi",
        accreditations: ["NABH"],
        description:
          "A 550-bed NABH-accredited hospital in Kerala combining world-class cardiac surgery with post-operative Ayurvedic recovery programs. A favorite for Gulf and African patients.",
        imageUrl: "/hospitals/rajagiri.jpg",
      },
    }),
  ]);

  console.log(`🏥 Created ${hospitals.length} hospitals\n`);

  // ----- DOCTORS -----
  const doctorData = [
    // Apollo Chennai
    { hospitalIdx: 0, name: "Dr. K. R. Balakrishnan", specialty: "Cardiac Surgery", qualifications: ["MBBS", "MS", "MCh Cardiothoracic Surgery"], experienceYears: 35 },
    { hospitalIdx: 0, name: "Dr. Preetha Reddy", specialty: "Oncology", qualifications: ["MBBS", "MD", "DM Medical Oncology"], experienceYears: 28 },
    { hospitalIdx: 0, name: "Dr. Prathap C. Reddy", specialty: "Cardiology", qualifications: ["MBBS", "MD", "FACC"], experienceYears: 45 },
    // Medanta
    { hospitalIdx: 1, name: "Dr. Naresh Trehan", specialty: "Cardiac Surgery", qualifications: ["MBBS", "MS", "FACC", "FACS"], experienceYears: 45 },
    { hospitalIdx: 1, name: "Dr. Arvind Kumar", specialty: "Pulmonology", qualifications: ["MBBS", "MS", "FRCS"], experienceYears: 35 },
    { hospitalIdx: 1, name: "Dr. Randeep Guleria", specialty: "Pulmonology", qualifications: ["MBBS", "MD", "DM"], experienceYears: 30 },
    // Fortis Gurugram
    { hospitalIdx: 2, name: "Dr. Ashok Rajgopal", specialty: "Orthopedics", qualifications: ["MBBS", "MS Ortho", "MCh"], experienceYears: 40 },
    { hospitalIdx: 2, name: "Dr. Simmardeep Singh Gill", specialty: "Neurosurgery", qualifications: ["MBBS", "MS", "MCh Neurosurgery"], experienceYears: 22 },
    // Tata Memorial
    { hospitalIdx: 3, name: "Dr. Rajendra Badwe", specialty: "Oncology", qualifications: ["MBBS", "MS", "FRCS"], experienceYears: 35 },
    { hospitalIdx: 3, name: "Dr. Sudeep Gupta", specialty: "Oncology", qualifications: ["MBBS", "MD", "DM Medical Oncology"], experienceYears: 25 },
    // Max Delhi
    { hospitalIdx: 4, name: "Dr. Harit Chaturvedi", specialty: "Oncology", qualifications: ["MBBS", "MS", "MCh Surgical Oncology"], experienceYears: 30 },
    { hospitalIdx: 4, name: "Dr. Vivek Nangia", specialty: "Pulmonology", qualifications: ["MBBS", "MD", "FCCP"], experienceYears: 28 },
    // Narayana Bangalore
    { hospitalIdx: 5, name: "Dr. Devi Shetty", specialty: "Cardiac Surgery", qualifications: ["MBBS", "MS", "FRCS"], experienceYears: 40 },
    { hospitalIdx: 5, name: "Dr. Manish Mattoo", specialty: "Orthopedics", qualifications: ["MBBS", "MS Ortho", "DNB"], experienceYears: 20 },
    // Manipal Bangalore
    { hospitalIdx: 6, name: "Dr. Anand K.", specialty: "Organ Transplant", qualifications: ["MBBS", "MS", "MCh"], experienceYears: 25 },
    { hospitalIdx: 6, name: "Dr. Vidya Desai", specialty: "Neurology", qualifications: ["MBBS", "MD", "DM Neurology"], experienceYears: 18 },
    // Kokilaben Mumbai
    { hospitalIdx: 7, name: "Dr. Ram Narain", specialty: "Neurosurgery", qualifications: ["MBBS", "MCh Neurosurgery"], experienceYears: 25 },
    { hospitalIdx: 7, name: "Dr. Milan Balakrishnan", specialty: "IVF & Fertility", qualifications: ["MBBS", "MD", "DGO"], experienceYears: 20 },
    // Aster Kochi
    { hospitalIdx: 8, name: "Dr. Tiny Nair", specialty: "Cardiology", qualifications: ["MBBS", "MD", "DM Cardiology"], experienceYears: 30 },
    { hospitalIdx: 8, name: "Dr. Farhan Ahmed", specialty: "Gastroenterology", qualifications: ["MBBS", "MD", "DM"], experienceYears: 15 },
    // BLK-Max Delhi
    { hospitalIdx: 9, name: "Dr. Dharma Choudhary", specialty: "Oncology", qualifications: ["MBBS", "MD", "DM Haematology"], experienceYears: 25 },
    { hospitalIdx: 9, name: "Dr. Shalabh Agrawal", specialty: "Organ Transplant", qualifications: ["MBBS", "MS", "MCh"], experienceYears: 22 },
    // Global Chennai
    { hospitalIdx: 10, name: "Dr. Mohamed Rela", specialty: "Organ Transplant", qualifications: ["MBBS", "MS", "FRCS", "PhD"], experienceYears: 35 },
    // Fortis Escorts
    { hospitalIdx: 11, name: "Dr. Ashok Seth", specialty: "Cardiology", qualifications: ["MBBS", "MD", "DM", "FACC", "FESC"], experienceYears: 40 },
    // Amrita
    { hospitalIdx: 12, name: "Dr. Sandeep Vaishya", specialty: "Neurosurgery", qualifications: ["MBBS", "MS", "MCh Neurosurgery"], experienceYears: 28 },
    // CMC Vellore
    { hospitalIdx: 13, name: "Dr. V. Mathew", specialty: "Haematology", qualifications: ["MBBS", "MD", "DM Haematology"], experienceYears: 30 },
    // Rajagiri
    { hospitalIdx: 14, name: "Dr. Jose Chacko Periappuram", specialty: "Cardiac Surgery", qualifications: ["MBBS", "MS", "MCh"], experienceYears: 30 },
  ];

  const doctors = await Promise.all(
    doctorData.map((d) =>
      prisma.doctor.create({
        data: {
          hospitalId: hospitals[d.hospitalIdx].id,
          name: d.name,
          specialty: d.specialty,
          qualifications: d.qualifications,
          experienceYears: d.experienceYears,
        },
      })
    )
  );

  console.log(`👨‍⚕️ Created ${doctors.length} doctors\n`);

  // ----- PROCEDURES -----
  const procedureData = [
    // Cardiac
    { hospitalIdx: 0, name: "Coronary Artery Bypass Graft (CABG)", category: "Cardiac Surgery", baseCostUSD: 5200 },
    { hospitalIdx: 1, name: "Coronary Artery Bypass Graft (CABG)", category: "Cardiac Surgery", baseCostUSD: 5800 },
    { hospitalIdx: 5, name: "Coronary Artery Bypass Graft (CABG)", category: "Cardiac Surgery", baseCostUSD: 3500 },
    { hospitalIdx: 11, name: "Coronary Angioplasty + Stenting", category: "Cardiology", baseCostUSD: 3200 },
    { hospitalIdx: 8, name: "Heart Valve Replacement", category: "Cardiac Surgery", baseCostUSD: 6500 },
    { hospitalIdx: 14, name: "Coronary Artery Bypass Graft (CABG)", category: "Cardiac Surgery", baseCostUSD: 4200 },
    // Oncology
    { hospitalIdx: 3, name: "CAR-T Cell Therapy", category: "Oncology", baseCostUSD: 40000 },
    { hospitalIdx: 3, name: "Breast Cancer Treatment (Stage II)", category: "Oncology", baseCostUSD: 8000 },
    { hospitalIdx: 4, name: "Lung Cancer Treatment Package", category: "Oncology", baseCostUSD: 12000 },
    { hospitalIdx: 9, name: "Bone Marrow Transplant (Allogenic)", category: "Oncology", baseCostUSD: 25000 },
    { hospitalIdx: 7, name: "CyberKnife Radiosurgery", category: "Oncology", baseCostUSD: 7500 },
    // Orthopedics
    { hospitalIdx: 2, name: "Total Knee Replacement (Unilateral)", category: "Orthopedics", baseCostUSD: 4500 },
    { hospitalIdx: 2, name: "Total Hip Replacement", category: "Orthopedics", baseCostUSD: 5500 },
    { hospitalIdx: 5, name: "Spinal Fusion Surgery", category: "Orthopedics", baseCostUSD: 6000 },
    // Organ Transplant
    { hospitalIdx: 10, name: "Liver Transplant (Living Donor)", category: "Organ Transplant", baseCostUSD: 28000 },
    { hospitalIdx: 6, name: "Kidney Transplant", category: "Organ Transplant", baseCostUSD: 13000 },
    { hospitalIdx: 9, name: "Liver Transplant (Living Donor)", category: "Organ Transplant", baseCostUSD: 30000 },
    // Neurosurgery
    { hospitalIdx: 7, name: "Brain Tumor Removal", category: "Neurosurgery", baseCostUSD: 8000 },
    { hospitalIdx: 12, name: "Deep Brain Stimulation", category: "Neurosurgery", baseCostUSD: 15000 },
    { hospitalIdx: 2, name: "Spinal Cord Surgery", category: "Neurosurgery", baseCostUSD: 7500 },
    // IVF
    { hospitalIdx: 7, name: "IVF Cycle (Single)", category: "IVF & Fertility", baseCostUSD: 3000 },
    // Dental
    { hospitalIdx: 0, name: "Full Mouth Dental Implants", category: "Dental", baseCostUSD: 5000 },
    // Bariatric
    { hospitalIdx: 4, name: "Gastric Bypass Surgery", category: "Bariatric Surgery", baseCostUSD: 5500 },
    // Cosmetic
    { hospitalIdx: 7, name: "Rhinoplasty", category: "Cosmetic Surgery", baseCostUSD: 2500 },
  ];

  const procedures = await Promise.all(
    procedureData.map((p) =>
      prisma.procedure.create({
        data: {
          hospitalId: hospitals[p.hospitalIdx].id,
          name: p.name,
          category: p.category,
          baseCostUSD: p.baseCostUSD,
        },
      })
    )
  );

  console.log(`💊 Created ${procedures.length} procedures\n`);

  // ----- DEMO USER -----
  const hashedPassword = await bcrypt.hash("password123", 12);
  const demoUser = await prisma.user.create({
    data: {
      email: "demo@medbud.com",
      password: hashedPassword,
      role: "PATIENT",
      patientProfile: {
        create: {
          firstName: "Ahmed",
          lastName: "Al-Rashidi",
          country: "Iraq",
          phoneNumber: "+964-770-1234567",
        },
      },
    },
  });

  console.log(`👤 Created demo user: demo@medbud.com / password123\n`);

  // ----- DEMO AGENT -----
  const agentUser = await prisma.user.create({
    data: {
      email: "agent@medbud.com",
      password: hashedPassword,
      role: "AGENT",
      agentProfile: {
        create: {
          companyName: "HealthBridge Nigeria",
          contactNumber: "+234-801-2345678",
          country: "Nigeria",
          commissionRate: 8.0,
        },
      },
    },
  });

  console.log(`🤝 Created demo agent: agent@medbud.com / password123\n`);

  console.log("✅ Seeding complete!");
  console.log(`   ${hospitals.length} hospitals`);
  console.log(`   ${doctors.length} doctors`);
  console.log(`   ${procedures.length} procedures`);
  console.log(`   2 demo users`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
