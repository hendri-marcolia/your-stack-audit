# SecArch: Visual Infrastructure Modeling with Real-Time CVE Intelligence

**Author:** Hendri Marcolia

---

## Abstract

Infrastructure design often lacks real-time security awareness. While teams diagram their systems, they seldom correlate those diagrams with live vulnerability intelligence. **SecArch** bridges this gap. It empowers users to design their architecture via drag-and-drop or natural language input, then performs real-time CVE analysis using feeds like CISA’s Known Exploited Vulnerabilities Catalog. With support for integrations such as ThreatMapper, SecArch provides a novel approach to shifting security left.

## 1. Introduction

Modern infrastructure has grown both in complexity and in exposure. With container orchestration, microservices, third-party APIs, and CI/CD pipelines, the potential attack surface has expanded exponentially. Yet infrastructure design tools and CVE scanning platforms operate in silos.

Design diagrams are static, updated manually, and quickly become outdated. Meanwhile, security scanning happens post-deployment. The result? A reactive security posture, high MTTR (Mean Time to Remediation), and missed opportunities for mitigation.

SecArch aims to disrupt this model by placing CVE awareness in the design loop. It supports hybrid modeling: visual drag-and-drop plus prompt-based creation. As the user adds components, the system correlates them with known CVEs and provides real-time feedback.

## 2. Related Work

Several tools aim to map runtime infrastructure to known vulnerabilities:

- **ThreatMapper**: Maps running containers to known vulnerabilities using in-memory scanning.
- **Snyk / Wiz / Aqua**: Focused on CI/CD pipeline scanning and compliance.
- **OpenVAS / Nessus**: Provide network-layer vulnerability assessments.
- **ArchiMate**: Used in enterprise modeling but lacks security correlation.

**SecArch** is distinct in that it targets the *design-time* phase, mapping visual representations to real-world threats before anything is deployed.

## 3. Architecture and Technical Design

### 3.1 Component Overview

- **Frontend UI**: Web canvas editor with support for drag-and-drop + prompt-based component creation.
- **LLM Inference Layer**: Powers intent parsing, component enrichment, and CVE explanation. Backed by models like GPT or Claude.
- **CVE Scanner**: Periodically pulls from CISA KEV, NVD, and other CVE APIs. Uses semantic matching to associate components with vulnerabilities.
- **SBOM Engine (Planned)**: Parses software bill of materials and aligns with CVE databases.
- **Notification Engine**: Alerts users on new CVEs affecting previously modeled stacks.

### 3.2 CVE Matching Algorithm

- Normalize component names (e.g., “nginx ingress” ➝ “nginx”)
- Extract versions via regex, SBOMs, or manual user input
- Match CVE entries with aliases and fuzzy logic
- Generate confidence score + risk impact summary

### 3.3 LLM Prompt Patterns

- “What are the risks in this setup?”
- “Summarize CVEs for Apache Kafka.”
- “Suggest mitigations for high-risk components.”

Responses are grounded to CVE sources. Hallucination is reduced using prompt engineering and source quoting.

## 4. Use Case and Scenario

### Example: Cloud Messaging Stack

A cloud architect designs a distributed messaging system involving:
- Kubernetes
- Apache Kafka
- NGINX Ingress
- Redis

As components are added:
- Kafka is flagged with [CVE-2023-25194](https://nvd.nist.gov/vuln/detail/CVE-2023-25194), with risk score 9.8
- NGINX has an active exploit in the CISA KEV list

SecArch displays:
- Warning banners on affected components
- A narrative summary of the CVE in plain language
- Suggestions to patch, upgrade, or mitigate risks

## 5. Security Model and Risk Mitigation

### 5.1 Potential Threats
- **Data poisoning** from unverified CVE feeds
- **LLM hallucinations** generating false positives
- **Prompt injection** from user-defined component metadata

### 5.2 Controls Implemented
- Only trusted CVE sources (CISA, NVD)
- Explicit linking of CVEs to public advisories
- Confidence scoring and explainability UI
- Manual override to edit or dismiss CVE alerts

## 6. Performance Benchmarks

Early testing yields:
- CVE match time per component: ~150ms
- UI load time: < 1.5s on average modern laptop
- NLP component parsing accuracy: ~92% for common infrastructure terms

## 7. Integration Roadmap

- ✅ ThreatMapper integration for runtime CVE matching
- 🔜 Terraform/Pulumi IaC parsing (import/export)
- 🔜 SBOM ingestion (CycloneDX, SPDX)
- 🔜 GitHub/GitLab plugin to trigger scans pre-commit
- 🔜 Slack / Teams push alerting

## 8. Positioning and Differentiation

| Feature                     | SecArch | ThreatMapper | Snyk | ArchiMate |
|-----------------------------|---------|----------------|------|------------|
| Design-Time Modeling        | ✅      | ❌              | ❌   | ✅         |
| Live CVE Feed Integration   | ✅      | ✅              | ✅   | ❌         |
| LLM-Powered Insight         | ✅      | ❌              | ❌   | ❌         |
| OSS & Extensible            | ✅      | ✅              | ❌   | ❌         |

## 9. Limitations and Future Directions

- **Version Ambiguity**: Mapping versionless components to CVEs is probabilistic.
- **LLM Cost/Latency**: Cloud inference may be too slow or costly in CI/CD loops.
- **User Trust Calibration**: Not all CVEs are actionable — ranking by exploit maturity is in development.

Future plans include:
- Multi-user collaboration
- Audit trail export for GRC compliance
- Integration with enterprise SBOM generators

## 10. Conclusion

SecArch isn’t just a modeling tool — it’s a paradigm shift. It places threat intelligence at the fingertips of architects and DevSecOps teams during the most critical phase: *design*. 

By fusing UX-friendly modeling with real-time vulnerability awareness, it transforms static diagrams into proactive risk dashboards. With integrations to trusted feeds and tools like ThreatMapper, SecArch is a lightweight but powerful weapon against modern supply chain threats.

## References

- [CISA KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [MITRE CVE Database](https://cve.mitre.org/)
- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [ThreatMapper by Deepfence](https://github.com/deepfence/ThreatMapper)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- CycloneDX: https://cyclonedx.org/
- SPDX: https://spdx.dev/

---

**Contact:** Hendri Marcolia | [LinkedIn](https://id.linkedin.com/in/hendri-marcolia-847ba0190)
