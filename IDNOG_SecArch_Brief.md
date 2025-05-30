
# SecArch: Visual Infrastructure Modeling with Real-Time CVE Intelligence

**Author:** Hendri Marcolia

## Abstract
In an era where software supply chain attacks and zero-day exploits have become the norm rather than the exception, it is no longer sufficient to treat architecture diagrams as static documents. This paper introduces **SecArch**, a next-generation platform that enables security-aware infrastructure modeling. Leveraging a hybrid approach of drag-and-drop components and natural language processing via large language models (LLMs), SecArch allows engineers to visually design, assess, and maintain their cloud-native, hybrid, or legacy infrastructures while continuously scanning for known vulnerabilities (CVEs) using curated threat intelligence from sources like the CISA KEV catalog. This paper explores the design rationale, threat modeling integration, architectural components, and a proposed roadmap for community-driven adoption.

## 1. Introduction

Infrastructure complexity has increased exponentially with the rise of containerization, distributed microservices, and Infrastructure-as-Code (IaC). Yet most infrastructure documentation fails to stay current, and even fewer correlate live threat intelligence with existing components. Manual CVE audits are resource-intensive and reactive. SecArch addresses this gap by embedding threat awareness into the design and maintenance phase.

## 2. Problem Statement

Today’s DevSecOps teams face three key challenges:
1. **Stale architecture artifacts** that lag behind actual infrastructure.
2. **Low observability into CVEs** that affect currently deployed services.
3. **Inefficient collaboration** between security, infra, and application teams.

Traditional scanning tools work post-deployment, creating silos and delays. SecArch enables a shift-left approach by providing proactive, design-time CVE awareness.

## 3. Platform Overview

SecArch offers the following core features:

- **Hybrid Stack Builder**: Combine drag-and-drop UI with LLM-driven prompts for rapid architecture creation.
- **Real-Time CVE Intelligence**: Integration with threat sources like [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) ensures constant monitoring.
- **Explainable Security**: LLMs generate summaries of risks and remediation paths for non-expert users.
- **Version-Aware Correlation**: CVEs are matched against specific software versions using inferred or user-provided metadata.

## 4. Technical Architecture

- **Frontend**: Web-based visual stack editor with LLM prompt input.
- **Backend**: Microservices for CVE matching, version resolution, LLM enrichment, and user/project storage.
- **Threat Intelligence Pipeline**: Polls KEV and potentially NVD for new entries, triggers stack re-evaluation.
- **Optional Integration**: With ThreatMapper (OSS) to validate modeled stacks against real-time runtime environments.

## 5. Use Case Scenario

Imagine a user modeling a Kubernetes cluster running NGINX and Apache Kafka. As the architecture is laid out, SecArch instantly flags a CVE affecting the NGINX version declared in the model. An LLM-generated card explains the vulnerability, suggests upgrading to a safer version, and links to mitigation resources. 

This feedback loop transforms SecArch into a live security coach during architecture discussions.

## 6. Limitations and Mitigations

- **LLM Hallucination Risk**: Mitigated through manual override options and version uncertainty indicators.
- **CVE Granularity**: Optional fields for OS, config, and SBOMs improve precision.
- **Security Source Coverage**: Currently limited to KEV; roadmap includes NVD and vendor-specific advisories.

## 7. Future Roadmap

- SBOM and IaC support for automatic model generation.
- Slack/Teams notifications on new threats.
- Multi-user collaboration with change tracking.
- Community edition with open-source license.

## 8. Conclusion

SecArch is not just a modeling tool — it is a proactive security companion that brings threat intelligence into the design phase. By integrating real-time CVE insights into architecture modeling, it enables faster, safer, and more collaborative infrastructure planning. 

The goal is clear: empower teams to own their security posture from the first diagram.
