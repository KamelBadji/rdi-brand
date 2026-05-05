import type { Course } from '../types'
import { course as rdi_foundations } from './rdi-foundations'
import { course as claims_evidence_practitioner } from './claims-evidence-practitioner'
import { course as safety_workflows_site_leadership } from './safety-workflows-site-leadership'
import { course as rdi_for_owners } from './rdi-for-owners'
import { course as capture_planning_and_coverage } from './capture-planning-and-coverage'
import { course as rdi_economics_business_case } from './rdi-economics-business-case'

export const courses: Course[] = [
  rdi_foundations,
  claims_evidence_practitioner,
  safety_workflows_site_leadership,
  rdi_for_owners,
  capture_planning_and_coverage,
  rdi_economics_business_case,
]
