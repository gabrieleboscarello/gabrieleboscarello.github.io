const API_URL = "/data.json";

async function loadProjects() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const projects = data.projects;
  // usa come già fai
}

async function loadCertifications() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const certs = data.certifications;
}