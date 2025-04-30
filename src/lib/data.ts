export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  coverImage?: string
  subtitle?: string
  author?: string
  duration?: string
  series?: string
  episode?: string
}

import { generateUniqueSlug } from "./utils"

// Simulate local storage for posts
let posts: Post[] = [
  {
    id: "1",
    slug: "genomic-sequencing-revolutionizing-precision-medicine",
    title: "Genomic Sequencing: Revolutionizing Precision Medicine",
    subtitle: "How DNA analysis is transforming personalized healthcare and treatment strategies",
    excerpt:
      "Explore how next-generation sequencing technologies are enabling physicians to tailor treatments based on individual genetic profiles, leading to more effective healthcare outcomes.",
    content:
      '<h2>The Power of Genomic Medicine</h2><p>Genomic sequencing has transformed our approach to healthcare, enabling physicians to analyze a patient\'s complete DNA profile and identify genetic variations that may influence disease risk and treatment response.</p><img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" alt="DNA sequencing visualization on computer screen"/><p>With the cost of whole genome sequencing dropping from billions to under a thousand dollars, precision medicine is becoming increasingly accessible to patients worldwide. This technological revolution allows doctors to move beyond the traditional "one-size-fits-all" approach to treatment.</p><h2>Clinical Applications</h2><p>The impact of genomic medicine spans numerous specialties. In oncology, tumor sequencing helps identify specific genetic mutations driving cancer growth, allowing for targeted therapies that attack cancer cells while sparing healthy tissue. In pharmacogenomics, genetic testing predicts how patients will respond to medications, reducing adverse reactions and improving efficacy.</p><p>For rare disease patients, who often endure years of diagnostic uncertainty, genomic sequencing can provide answers and guide treatment decisions. Additionally, healthy individuals can gain insights into their disease risks, enabling proactive health management and prevention strategies tailored to their genetic profile.</p><h2>The Future of Precision Healthcare</h2><p>As our understanding of the genome expands and technologies continue to advance, we\'re moving toward an era where medical decisions will routinely incorporate genetic information alongside traditional clinical factors. This integration promises more precise diagnoses, targeted treatments, and ultimately better patient outcomes.</p>',
    date: "2023-11-15T10:30:00Z",
    coverImage: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1200&q=80",
    author: "Livemore Team",
    duration: "6:30",
    series: "Genomic Medicine",
    episode: "01",
  },
  {
    id: "2",
    slug: "ai-driven-diagnostics-future-of-medical-imaging",
    title: "AI-Driven Diagnostics: The Future of Medical Imaging",
    subtitle: "How artificial intelligence is enhancing precision, speed, and accuracy in diagnostic medicine",
    excerpt:
      "Artificial intelligence algorithms are revolutionizing medical imaging analysis, enabling earlier detection of diseases and more personalized treatment planning.",
    content:
      '<h2>Transforming Diagnostic Capabilities</h2><p>Artificial intelligence is fundamentally changing how medical images are analyzed and interpreted. Advanced algorithms can now detect subtle patterns and anomalies that might escape even the trained eye of experienced radiologists.</p><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="Doctor analyzing medical scan with AI assistance"/><p>These AI systems are trained on millions of medical images, learning to identify markers of disease with remarkable accuracy. The result is faster diagnoses, reduced human error, and the ability to detect conditions at earlier, more treatable stages.</p><h2>Precision in Practice</h2><p>In oncology, AI algorithms can analyze mammograms and identify suspicious lesions that warrant further investigation. For neurological conditions, machine learning models can detect early signs of neurodegenerative diseases by identifying subtle changes in brain structure over time.</p><p>Cardiovascular imaging benefits from AI\'s ability to quantify heart function with greater precision and consistency than manual measurements. And in emergency medicine, AI-powered tools can rapidly prioritize cases, ensuring that critical conditions receive immediate attention.</p><h2>The Human-AI Partnership</h2><p>Rather than replacing healthcare professionals, AI serves as a powerful assistant, augmenting human capabilities and allowing clinicians to focus on complex decision-making and patient care. This partnership between human expertise and artificial intelligence represents the future of diagnostic medicine—combining the intuition and contextual understanding of physicians with the pattern recognition and processing power of advanced algorithms.</p><p>As these technologies continue to evolve, we can expect even greater integration of AI into clinical workflows, leading to more personalized treatment plans and improved patient outcomes.</p>',
    date: "2023-10-22T14:45:00Z",
    coverImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80",
    author: "Livemore Team",
    duration: "7:15",
    series: "Medical Technology",
    episode: "03",
  },
  {
    id: "3",
    slug: "biomarkers-personalized-treatment-selection",
    title: "Biomarkers: The Key to Personalized Treatment Selection",
    subtitle: "How molecular indicators are guiding more effective therapeutic decisions across medical specialties",
    excerpt:
      "Discover how biomarkers are transforming treatment selection by providing objective measurements that predict patient responses to specific therapies.",
    content:
      '<h2>Beyond One-Size-Fits-All Medicine</h2><p>Biomarkers—measurable indicators of biological states or conditions—have emerged as critical tools in precision medicine. These molecular signposts help clinicians determine which patients will benefit from specific treatments, sparing others from unnecessary side effects and ineffective therapies.</p><img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80" alt="Laboratory technician analyzing blood samples"/><p>Unlike traditional approaches that treat patients based primarily on disease classification, biomarker-guided therapy considers the unique molecular characteristics of each individual\'s condition, leading to more targeted and effective interventions.</p><h2>Clinical Applications Across Specialties</h2><p>In oncology, biomarkers like HER2 expression guide the use of targeted therapies such as trastuzumab for breast cancer. The presence of specific genetic mutations in lung cancer determines eligibility for treatments targeting the EGFR or ALK pathways.</p><p>For autoimmune conditions, measuring certain proteins can predict response to biological therapies, helping physicians choose between treatment options. In cardiology, biomarkers help stratify heart failure patients and guide medication selection.</p><h2>The Future of Biomarker Discovery</h2><p>As technology advances, we\'re discovering increasingly sophisticated biomarkers. Liquid biopsies can detect circulating tumor DNA in blood samples, allowing for non-invasive cancer monitoring. Proteomic analyses identify protein signatures associated with disease states and treatment responses.</p><p>The integration of multiple biomarkers into comprehensive panels provides even greater predictive power. These developments are moving us toward truly personalized medicine, where treatment decisions are based on a detailed molecular understanding of each patient\'s condition rather than population averages.</p>',
    date: "2023-09-10T09:15:00Z",
    coverImage: "https://images.unsplash.com/photo-1655210913810-33acfa96d1e6?w=1200&q=80",
    author: "Livemore Team",
    duration: "5:45",
    series: "Precision Diagnostics",
    episode: "02",
  },
  {
    id: "4",
    slug: "pharmacogenomics-right-drug-right-patient",
    title: "Pharmacogenomics: The Right Drug for the Right Patient",
    subtitle: "How genetic testing is preventing adverse drug reactions and optimizing medication efficacy",
    excerpt:
      "Pharmacogenomic testing is revolutionizing medication management by identifying genetic variations that affect drug metabolism and response, leading to safer and more effective prescribing practices.",
    content:
      '<h2>Personalizing Medication Selection</h2><p>Pharmacogenomics—the study of how genes affect a person\'s response to drugs—is transforming medication management. By analyzing specific genetic markers, clinicians can predict how patients will metabolize and respond to medications before they\'re prescribed.</p><img src="https://images.unsplash.com/photo-1585435557343-3b348031e799?w=800&q=80" alt="Pharmacist examining medication with genetic test results"/><p>This approach helps avoid the traditional trial-and-error method of prescribing, which can lead to adverse reactions, treatment failures, and unnecessary suffering for patients.</p><h2>Clinical Impact Across Specialties</h2><p>In psychiatry, genetic variations in the CYP450 enzyme system significantly affect how patients metabolize antidepressants and antipsychotics. Testing can identify whether someone is a poor, normal, or rapid metabolizer, guiding dosage decisions and medication selection.</p><p>For cardiovascular patients, genetic testing can identify individuals who won\'t respond to clopidogrel (Plavix), allowing physicians to choose alternative antiplatelet therapies. In pain management, pharmacogenomic insights help predict responses to opioids and other analgesics, improving pain control while reducing risks.</p><h2>Implementation in Clinical Practice</h2><p>As testing becomes more affordable and accessible, pharmacogenomics is increasingly being integrated into routine care. Some healthcare systems now perform preemptive testing, analyzing multiple pharmacogenes at once and storing results in electronic health records for future prescribing decisions.</p><p>This proactive approach ensures that genetic information is available when needed, allowing for immediate personalization of drug therapy. The result is more effective treatment with fewer adverse events, reduced healthcare costs, and improved patient satisfaction—a win for patients, providers, and healthcare systems alike.</p>',
    date: "2023-08-05T11:20:00Z",
    coverImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=80",
    author: "Livemore Team",
    duration: "6:15",
    series: "Precision Therapeutics",
    episode: "01",
  },
  {
    id: "5",
    slug: "liquid-biopsies-non-invasive-cancer-detection",
    title: "Liquid Biopsies: Non-Invasive Cancer Detection and Monitoring",
    subtitle:
      "How blood-based testing is transforming cancer diagnosis, treatment selection, and recurrence monitoring",
    excerpt:
      "Liquid biopsy technologies are enabling the detection and analysis of cancer through simple blood draws, offering less invasive alternatives to traditional tissue biopsies.",
    content:
      '<h2>Beyond Traditional Biopsies</h2><p>Liquid biopsies represent a revolutionary approach to cancer detection and monitoring. By analyzing blood samples for circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), and other cancer biomarkers, physicians can gain valuable insights without invasive tissue sampling.</p><img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80" alt="Laboratory technician processing blood samples for liquid biopsy"/><p>This approach is particularly valuable when tumors are difficult to access, when patients are too frail for invasive procedures, or when repeated sampling is necessary to track treatment response over time.</p><h2>Clinical Applications</h2><p>In early detection, highly sensitive liquid biopsy tests can identify cancer-specific DNA mutations in blood, potentially before tumors are visible on imaging studies. For patients with known cancer, these tests help monitor treatment response in real-time, allowing for rapid adjustment of ineffective therapies.</p><p>Perhaps most importantly, liquid biopsies can detect minimal residual disease after treatment, identifying patients at high risk of recurrence who might benefit from additional therapy. They can also capture the genetic evolution of tumors over time, revealing resistance mutations that suggest the need for alternative treatments.</p><h2>The Future of Cancer Monitoring</h2><p>As liquid biopsy technologies become more sensitive and comprehensive, they\'re likely to play an increasingly central role in cancer care. Multi-cancer early detection tests that screen for dozens of cancer types with a single blood draw are already in development.</p><p>These advances promise earlier detection, more precise treatment selection, and closer monitoring throughout the cancer journey—ultimately improving outcomes for patients while reducing the physical and psychological burden of invasive procedures.</p>',
    date: "2023-07-18T13:40:00Z",
    coverImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80",
    author: "Livemore Team",
    duration: "5:30",
    series: "Cancer Diagnostics",
    episode: "02",
  },
  {
    id: "6",
    slug: "microbiome-analysis-precision-nutrition",
    title: "Microbiome Analysis: The Foundation of Precision Nutrition",
    subtitle: "How gut bacteria profiling is personalizing dietary recommendations and improving metabolic health",
    excerpt:
      "Advances in microbiome sequencing are revealing the crucial role of gut bacteria in individual responses to foods, enabling truly personalized nutrition strategies.",
    content:
      '<h2>The Gut-Health Connection</h2><p>The human microbiome—the trillions of microorganisms living in and on our bodies—plays a crucial role in health and disease. Particularly important is the gut microbiome, which influences everything from digestion and nutrient absorption to immune function and even mental health.</p><img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80" alt="Nutritionist analyzing microbiome test results with patient"/><p>Recent advances in sequencing technology have made it possible to analyze an individual\'s unique microbial profile, revealing patterns that can guide personalized dietary recommendations.</p><h2>Personalized Nutritional Approaches</h2><p>Research has shown that individuals with different gut microbiome compositions respond differently to the same foods. For example, some people experience significant blood glucose spikes after eating certain carbohydrates, while others maintain stable levels—a difference largely attributable to their gut bacteria.</p><p>By analyzing a person\'s microbiome, nutritionists can now recommend specific dietary patterns that optimize their unique internal ecosystem. This might include increasing particular fiber types to feed beneficial bacteria, limiting foods that promote inflammation in their specific gut environment, or adding fermented foods to enhance microbial diversity.</p><h2>Beyond Digestion</h2><p>The implications of microbiome-based nutrition extend far beyond digestive health. Emerging research links gut bacteria to conditions ranging from obesity and diabetes to autoimmune disorders and neurological diseases.</p><p>By tailoring dietary approaches to support optimal microbiome function, practitioners aim to address the root causes of these conditions rather than merely managing symptoms. This represents a fundamental shift from generic dietary guidelines to truly personalized nutrition—a cornerstone of precision medicine that recognizes the biological uniqueness of each individual.</p>',
    date: "2023-06-30T09:50:00Z",
    coverImage: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80",
    author: "Livemore Team",
    duration: "4:45",
    series: "Precision Nutrition",
    episode: "01",
  },
]

// Get all posts
export function getPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single post by ID
export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

// Get all existing slugs
export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}

// Add a new post
export function addPost(postData: Omit<Post, "id" | "slug">): string {
  // Generate a unique ID
  const id = Math.random().toString(36).substring(2, 9)

  // Generate a unique slug from the title
  const existingSlugs = getAllSlugs()
  const slug = generateUniqueSlug(postData.title, existingSlugs)

  console.log("Generated slug for new post:", slug)

  // Create the new post object
  const newPost: Post = {
    id,
    slug,
    ...postData,
  }

  // Add the new post to the posts array
  posts = [newPost, ...posts]

  console.log("Added new post:", newPost)
  console.log("Total posts:", posts.length)

  return slug // Return slug instead of id
}

// Update an existing post
export function updatePost(id: string, updatedPost: Partial<Post>): string {
  const existingPost = getPostById(id)

  if (!existingPost) {
    console.error("Post not found for update:", id)
    return ""
  }

  // If the title has changed, generate a new slug
  let slug = existingPost.slug
  if (updatedPost.title && updatedPost.title !== existingPost.title) {
    const existingSlugs = getAllSlugs().filter((s) => s !== existingPost.slug)
    slug = generateUniqueSlug(updatedPost.title, existingSlugs)
    console.log("Generated new slug for updated post:", slug)
  }

  // Update the post
  posts = posts.map((post) =>
    post.id === id
      ? {
          ...post,
          ...updatedPost,
          slug, // Use the potentially new slug
        }
      : post,
  )

  return slug // Return the slug for navigation
}

// Delete a post
export function deletePost(id: string): void {
  posts = posts.filter((post) => post.id !== id)
}
