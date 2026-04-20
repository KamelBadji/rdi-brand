import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_workflow_packs_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_workflows_rdi_layers" AS ENUM('capture', 'ground-truth', 'interpretation', 'action', 'command');
  CREATE TYPE "public"."enum_workflows_evercam_role" AS ENUM('Replacement', 'Supporting', 'Supporting Replacement', 'None');
  CREATE TYPE "public"."enum_workflows_frequency" AS ENUM('Very Common', 'Common', 'Occasional', 'Rare');
  CREATE TYPE "public"."enum_workflows_confidence" AS ENUM('High', 'Medium', 'Low');
  CREATE TYPE "public"."enum_workflows_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_use_cases_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_courses_level" AS ENUM('Foundation', 'Practitioner', 'Executive');
  CREATE TYPE "public"."enum_courses_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_lessons_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_assessments_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_resources_type" AS ENUM('Guide', 'Template', 'Report', 'Webinar', 'Download', 'Methodology');
  CREATE TYPE "public"."enum_resources_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published', 'internal');
  CREATE TYPE "public"."enum_saved_projects_status" AS ENUM('draft', 'quote-requested', 'qualified', 'archived');
  CREATE TABLE "workflow_packs_roi_themes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"theme" varchar NOT NULL
  );
  
  CREATE TABLE "workflow_packs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"kicker" varchar,
  	"summary" varchar,
  	"hero_image_id" integer,
  	"commercial_story" varchar,
  	"priority" numeric DEFAULT 50,
  	"status" "enum_workflow_packs_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "workflow_packs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"personas_id" integer
  );
  
  CREATE TABLE "workflows_rdi_layers" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_workflows_rdi_layers",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "workflows" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"code" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"category" varchar NOT NULL,
  	"category_slug" varchar,
  	"workflow_pack_id" integer,
  	"evercam_role" "enum_workflows_evercam_role",
  	"frequency" "enum_workflows_frequency",
  	"confidence" "enum_workflows_confidence",
  	"description" varchar NOT NULL,
  	"is_evercam100_candidate" boolean DEFAULT false,
  	"roi_summary" varchar,
  	"status" "enum_workflows_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "use_cases" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"audience" varchar,
  	"summary" varchar,
  	"hero_image_id" integer,
  	"problem" varchar,
  	"outcome" varchar,
  	"evidence" varchar,
  	"status" "enum_use_cases_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "use_cases_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflow_packs_id" integer,
  	"workflows_id" integer
  );
  
  CREATE TABLE "personas_primary_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar
  );
  
  CREATE TABLE "personas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "project_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "project_types_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflow_packs_id" integer
  );
  
  CREATE TABLE "courses_learning_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"outcome" varchar
  );
  
  CREATE TABLE "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"level" "enum_courses_level",
  	"estimated_minutes" numeric,
  	"summary" varchar,
  	"hero_image_id" integer,
  	"status" "enum_courses_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"personas_id" integer,
  	"workflow_packs_id" integer
  );
  
  CREATE TABLE "lessons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"course_id" integer NOT NULL,
  	"order" numeric DEFAULT 1,
  	"estimated_minutes" numeric,
  	"summary" varchar,
  	"body" jsonb,
  	"status" "enum_lessons_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "assessments_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prompt" varchar NOT NULL,
  	"answer" varchar
  );
  
  CREATE TABLE "assessments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"course_id" integer,
  	"status" "enum_assessments_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "roi_assumptions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"category" varchar NOT NULL,
  	"default_value" numeric NOT NULL,
  	"unit" varchar NOT NULL,
  	"low_value" numeric,
  	"high_value" numeric,
  	"methodology" varchar,
  	"public" boolean DEFAULT true,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "roi_presets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar,
  	"workflow_pack_id" integer,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "roi_presets_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"roi_assumptions_id" integer
  );
  
  CREATE TABLE "site_planner_templates" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"project_type_id" integer,
  	"summary" varchar,
  	"capture_guidance" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_planner_templates_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflow_packs_id" integer
  );
  
  CREATE TABLE "glossary_terms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"term" varchar NOT NULL,
  	"definition" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "glossary_terms_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflows_id" integer
  );
  
  CREATE TABLE "resources" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"type" "enum_resources_type",
  	"summary" varchar,
  	"hero_image_id" integer,
  	"file_id" integer,
  	"url" varchar,
  	"status" "enum_resources_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"customer" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"status" "enum_case_studies_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflow_packs_id" integer
  );
  
  CREATE TABLE "quote_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar NOT NULL,
  	"contact_name" varchar,
  	"email" varchar NOT NULL,
  	"region" varchar,
  	"project_type" varchar,
  	"message" varchar,
  	"calculator_summary" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "quote_requests_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflow_packs_id" integer
  );
  
  CREATE TABLE "saved_projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_name" varchar NOT NULL,
  	"company" varchar,
  	"email" varchar,
  	"region" varchar,
  	"project_type_id" integer,
  	"roi_inputs" jsonb,
  	"site_planner_outputs" jsonb,
  	"status" "enum_saved_projects_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "saved_projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"workflows_id" integer,
  	"workflow_packs_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "workflow_packs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "workflows_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "use_cases_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "personas_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "project_types_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "courses_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "lessons_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "assessments_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "roi_assumptions_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "roi_presets_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "site_planner_templates_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "glossary_terms_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "case_studies_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "quote_requests_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "saved_projects_id" integer;
  ALTER TABLE "workflow_packs_roi_themes" ADD CONSTRAINT "workflow_packs_roi_themes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflow_packs" ADD CONSTRAINT "workflow_packs_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "workflow_packs_rels" ADD CONSTRAINT "workflow_packs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflow_packs_rels" ADD CONSTRAINT "workflow_packs_rels_personas_fk" FOREIGN KEY ("personas_id") REFERENCES "public"."personas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflows_rdi_layers" ADD CONSTRAINT "workflows_rdi_layers_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflows" ADD CONSTRAINT "workflows_workflow_pack_id_workflow_packs_id_fk" FOREIGN KEY ("workflow_pack_id") REFERENCES "public"."workflow_packs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "use_cases" ADD CONSTRAINT "use_cases_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "use_cases_rels" ADD CONSTRAINT "use_cases_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."use_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "use_cases_rels" ADD CONSTRAINT "use_cases_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "use_cases_rels" ADD CONSTRAINT "use_cases_rels_workflows_fk" FOREIGN KEY ("workflows_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "personas_primary_questions" ADD CONSTRAINT "personas_primary_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."personas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "project_types_rels" ADD CONSTRAINT "project_types_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."project_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "project_types_rels" ADD CONSTRAINT "project_types_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_learning_outcomes" ADD CONSTRAINT "courses_learning_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_personas_fk" FOREIGN KEY ("personas_id") REFERENCES "public"."personas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "assessments_questions" ADD CONSTRAINT "assessments_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."assessments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "assessments" ADD CONSTRAINT "assessments_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "roi_presets" ADD CONSTRAINT "roi_presets_workflow_pack_id_workflow_packs_id_fk" FOREIGN KEY ("workflow_pack_id") REFERENCES "public"."workflow_packs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "roi_presets_rels" ADD CONSTRAINT "roi_presets_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roi_presets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "roi_presets_rels" ADD CONSTRAINT "roi_presets_rels_roi_assumptions_fk" FOREIGN KEY ("roi_assumptions_id") REFERENCES "public"."roi_assumptions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_planner_templates" ADD CONSTRAINT "site_planner_templates_project_type_id_project_types_id_fk" FOREIGN KEY ("project_type_id") REFERENCES "public"."project_types"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_planner_templates_rels" ADD CONSTRAINT "site_planner_templates_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_planner_templates"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_planner_templates_rels" ADD CONSTRAINT "site_planner_templates_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_terms_rels" ADD CONSTRAINT "glossary_terms_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_terms_rels" ADD CONSTRAINT "glossary_terms_rels_workflows_fk" FOREIGN KEY ("workflows_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote_requests_rels" ADD CONSTRAINT "quote_requests_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."quote_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote_requests_rels" ADD CONSTRAINT "quote_requests_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "saved_projects" ADD CONSTRAINT "saved_projects_project_type_id_project_types_id_fk" FOREIGN KEY ("project_type_id") REFERENCES "public"."project_types"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "saved_projects_rels" ADD CONSTRAINT "saved_projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."saved_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "saved_projects_rels" ADD CONSTRAINT "saved_projects_rels_workflows_fk" FOREIGN KEY ("workflows_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "saved_projects_rels" ADD CONSTRAINT "saved_projects_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "workflow_packs_roi_themes_order_idx" ON "workflow_packs_roi_themes" USING btree ("_order");
  CREATE INDEX "workflow_packs_roi_themes_parent_id_idx" ON "workflow_packs_roi_themes" USING btree ("_parent_id");
  CREATE INDEX "workflow_packs_hero_image_idx" ON "workflow_packs" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "workflow_packs_slug_idx" ON "workflow_packs" USING btree ("slug");
  CREATE INDEX "workflow_packs_updated_at_idx" ON "workflow_packs" USING btree ("updated_at");
  CREATE INDEX "workflow_packs_created_at_idx" ON "workflow_packs" USING btree ("created_at");
  CREATE INDEX "workflow_packs_rels_order_idx" ON "workflow_packs_rels" USING btree ("order");
  CREATE INDEX "workflow_packs_rels_parent_idx" ON "workflow_packs_rels" USING btree ("parent_id");
  CREATE INDEX "workflow_packs_rels_path_idx" ON "workflow_packs_rels" USING btree ("path");
  CREATE INDEX "workflow_packs_rels_personas_id_idx" ON "workflow_packs_rels" USING btree ("personas_id");
  CREATE INDEX "workflows_rdi_layers_order_idx" ON "workflows_rdi_layers" USING btree ("order");
  CREATE INDEX "workflows_rdi_layers_parent_idx" ON "workflows_rdi_layers" USING btree ("parent_id");
  CREATE UNIQUE INDEX "workflows_code_idx" ON "workflows" USING btree ("code");
  CREATE INDEX "workflows_workflow_pack_idx" ON "workflows" USING btree ("workflow_pack_id");
  CREATE UNIQUE INDEX "workflows_slug_idx" ON "workflows" USING btree ("slug");
  CREATE INDEX "workflows_updated_at_idx" ON "workflows" USING btree ("updated_at");
  CREATE INDEX "workflows_created_at_idx" ON "workflows" USING btree ("created_at");
  CREATE INDEX "use_cases_hero_image_idx" ON "use_cases" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "use_cases_slug_idx" ON "use_cases" USING btree ("slug");
  CREATE INDEX "use_cases_updated_at_idx" ON "use_cases" USING btree ("updated_at");
  CREATE INDEX "use_cases_created_at_idx" ON "use_cases" USING btree ("created_at");
  CREATE INDEX "use_cases_rels_order_idx" ON "use_cases_rels" USING btree ("order");
  CREATE INDEX "use_cases_rels_parent_idx" ON "use_cases_rels" USING btree ("parent_id");
  CREATE INDEX "use_cases_rels_path_idx" ON "use_cases_rels" USING btree ("path");
  CREATE INDEX "use_cases_rels_workflow_packs_id_idx" ON "use_cases_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "use_cases_rels_workflows_id_idx" ON "use_cases_rels" USING btree ("workflows_id");
  CREATE INDEX "personas_primary_questions_order_idx" ON "personas_primary_questions" USING btree ("_order");
  CREATE INDEX "personas_primary_questions_parent_id_idx" ON "personas_primary_questions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "personas_slug_idx" ON "personas" USING btree ("slug");
  CREATE INDEX "personas_updated_at_idx" ON "personas" USING btree ("updated_at");
  CREATE INDEX "personas_created_at_idx" ON "personas" USING btree ("created_at");
  CREATE UNIQUE INDEX "project_types_slug_idx" ON "project_types" USING btree ("slug");
  CREATE INDEX "project_types_updated_at_idx" ON "project_types" USING btree ("updated_at");
  CREATE INDEX "project_types_created_at_idx" ON "project_types" USING btree ("created_at");
  CREATE INDEX "project_types_rels_order_idx" ON "project_types_rels" USING btree ("order");
  CREATE INDEX "project_types_rels_parent_idx" ON "project_types_rels" USING btree ("parent_id");
  CREATE INDEX "project_types_rels_path_idx" ON "project_types_rels" USING btree ("path");
  CREATE INDEX "project_types_rels_workflow_packs_id_idx" ON "project_types_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "courses_learning_outcomes_order_idx" ON "courses_learning_outcomes" USING btree ("_order");
  CREATE INDEX "courses_learning_outcomes_parent_id_idx" ON "courses_learning_outcomes" USING btree ("_parent_id");
  CREATE INDEX "courses_hero_image_idx" ON "courses" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "courses_slug_idx" ON "courses" USING btree ("slug");
  CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX "courses_rels_order_idx" ON "courses_rels" USING btree ("order");
  CREATE INDEX "courses_rels_parent_idx" ON "courses_rels" USING btree ("parent_id");
  CREATE INDEX "courses_rels_path_idx" ON "courses_rels" USING btree ("path");
  CREATE INDEX "courses_rels_personas_id_idx" ON "courses_rels" USING btree ("personas_id");
  CREATE INDEX "courses_rels_workflow_packs_id_idx" ON "courses_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "lessons_course_idx" ON "lessons" USING btree ("course_id");
  CREATE UNIQUE INDEX "lessons_slug_idx" ON "lessons" USING btree ("slug");
  CREATE INDEX "lessons_updated_at_idx" ON "lessons" USING btree ("updated_at");
  CREATE INDEX "lessons_created_at_idx" ON "lessons" USING btree ("created_at");
  CREATE INDEX "assessments_questions_order_idx" ON "assessments_questions" USING btree ("_order");
  CREATE INDEX "assessments_questions_parent_id_idx" ON "assessments_questions" USING btree ("_parent_id");
  CREATE INDEX "assessments_course_idx" ON "assessments" USING btree ("course_id");
  CREATE UNIQUE INDEX "assessments_slug_idx" ON "assessments" USING btree ("slug");
  CREATE INDEX "assessments_updated_at_idx" ON "assessments" USING btree ("updated_at");
  CREATE INDEX "assessments_created_at_idx" ON "assessments" USING btree ("created_at");
  CREATE UNIQUE INDEX "roi_assumptions_slug_idx" ON "roi_assumptions" USING btree ("slug");
  CREATE INDEX "roi_assumptions_updated_at_idx" ON "roi_assumptions" USING btree ("updated_at");
  CREATE INDEX "roi_assumptions_created_at_idx" ON "roi_assumptions" USING btree ("created_at");
  CREATE INDEX "roi_presets_workflow_pack_idx" ON "roi_presets" USING btree ("workflow_pack_id");
  CREATE UNIQUE INDEX "roi_presets_slug_idx" ON "roi_presets" USING btree ("slug");
  CREATE INDEX "roi_presets_updated_at_idx" ON "roi_presets" USING btree ("updated_at");
  CREATE INDEX "roi_presets_created_at_idx" ON "roi_presets" USING btree ("created_at");
  CREATE INDEX "roi_presets_rels_order_idx" ON "roi_presets_rels" USING btree ("order");
  CREATE INDEX "roi_presets_rels_parent_idx" ON "roi_presets_rels" USING btree ("parent_id");
  CREATE INDEX "roi_presets_rels_path_idx" ON "roi_presets_rels" USING btree ("path");
  CREATE INDEX "roi_presets_rels_roi_assumptions_id_idx" ON "roi_presets_rels" USING btree ("roi_assumptions_id");
  CREATE INDEX "site_planner_templates_project_type_idx" ON "site_planner_templates" USING btree ("project_type_id");
  CREATE UNIQUE INDEX "site_planner_templates_slug_idx" ON "site_planner_templates" USING btree ("slug");
  CREATE INDEX "site_planner_templates_updated_at_idx" ON "site_planner_templates" USING btree ("updated_at");
  CREATE INDEX "site_planner_templates_created_at_idx" ON "site_planner_templates" USING btree ("created_at");
  CREATE INDEX "site_planner_templates_rels_order_idx" ON "site_planner_templates_rels" USING btree ("order");
  CREATE INDEX "site_planner_templates_rels_parent_idx" ON "site_planner_templates_rels" USING btree ("parent_id");
  CREATE INDEX "site_planner_templates_rels_path_idx" ON "site_planner_templates_rels" USING btree ("path");
  CREATE INDEX "site_planner_templates_rels_workflow_packs_id_idx" ON "site_planner_templates_rels" USING btree ("workflow_packs_id");
  CREATE UNIQUE INDEX "glossary_terms_slug_idx" ON "glossary_terms" USING btree ("slug");
  CREATE INDEX "glossary_terms_updated_at_idx" ON "glossary_terms" USING btree ("updated_at");
  CREATE INDEX "glossary_terms_created_at_idx" ON "glossary_terms" USING btree ("created_at");
  CREATE INDEX "glossary_terms_rels_order_idx" ON "glossary_terms_rels" USING btree ("order");
  CREATE INDEX "glossary_terms_rels_parent_idx" ON "glossary_terms_rels" USING btree ("parent_id");
  CREATE INDEX "glossary_terms_rels_path_idx" ON "glossary_terms_rels" USING btree ("path");
  CREATE INDEX "glossary_terms_rels_workflows_id_idx" ON "glossary_terms_rels" USING btree ("workflows_id");
  CREATE INDEX "resources_hero_image_idx" ON "resources" USING btree ("hero_image_id");
  CREATE INDEX "resources_file_idx" ON "resources" USING btree ("file_id");
  CREATE UNIQUE INDEX "resources_slug_idx" ON "resources" USING btree ("slug");
  CREATE INDEX "resources_updated_at_idx" ON "resources" USING btree ("updated_at");
  CREATE INDEX "resources_created_at_idx" ON "resources" USING btree ("created_at");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "case_studies_rels_order_idx" ON "case_studies_rels" USING btree ("order");
  CREATE INDEX "case_studies_rels_parent_idx" ON "case_studies_rels" USING btree ("parent_id");
  CREATE INDEX "case_studies_rels_path_idx" ON "case_studies_rels" USING btree ("path");
  CREATE INDEX "case_studies_rels_workflow_packs_id_idx" ON "case_studies_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "quote_requests_updated_at_idx" ON "quote_requests" USING btree ("updated_at");
  CREATE INDEX "quote_requests_created_at_idx" ON "quote_requests" USING btree ("created_at");
  CREATE INDEX "quote_requests_rels_order_idx" ON "quote_requests_rels" USING btree ("order");
  CREATE INDEX "quote_requests_rels_parent_idx" ON "quote_requests_rels" USING btree ("parent_id");
  CREATE INDEX "quote_requests_rels_path_idx" ON "quote_requests_rels" USING btree ("path");
  CREATE INDEX "quote_requests_rels_workflow_packs_id_idx" ON "quote_requests_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "saved_projects_project_type_idx" ON "saved_projects" USING btree ("project_type_id");
  CREATE INDEX "saved_projects_updated_at_idx" ON "saved_projects" USING btree ("updated_at");
  CREATE INDEX "saved_projects_created_at_idx" ON "saved_projects" USING btree ("created_at");
  CREATE INDEX "saved_projects_rels_order_idx" ON "saved_projects_rels" USING btree ("order");
  CREATE INDEX "saved_projects_rels_parent_idx" ON "saved_projects_rels" USING btree ("parent_id");
  CREATE INDEX "saved_projects_rels_path_idx" ON "saved_projects_rels" USING btree ("path");
  CREATE INDEX "saved_projects_rels_workflows_id_idx" ON "saved_projects_rels" USING btree ("workflows_id");
  CREATE INDEX "saved_projects_rels_workflow_packs_id_idx" ON "saved_projects_rels" USING btree ("workflow_packs_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_workflow_packs_fk" FOREIGN KEY ("workflow_packs_id") REFERENCES "public"."workflow_packs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_workflows_fk" FOREIGN KEY ("workflows_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_use_cases_fk" FOREIGN KEY ("use_cases_id") REFERENCES "public"."use_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_personas_fk" FOREIGN KEY ("personas_id") REFERENCES "public"."personas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_types_fk" FOREIGN KEY ("project_types_id") REFERENCES "public"."project_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_lessons_fk" FOREIGN KEY ("lessons_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_assessments_fk" FOREIGN KEY ("assessments_id") REFERENCES "public"."assessments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roi_assumptions_fk" FOREIGN KEY ("roi_assumptions_id") REFERENCES "public"."roi_assumptions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roi_presets_fk" FOREIGN KEY ("roi_presets_id") REFERENCES "public"."roi_presets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_site_planner_templates_fk" FOREIGN KEY ("site_planner_templates_id") REFERENCES "public"."site_planner_templates"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_glossary_terms_fk" FOREIGN KEY ("glossary_terms_id") REFERENCES "public"."glossary_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quote_requests_fk" FOREIGN KEY ("quote_requests_id") REFERENCES "public"."quote_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_saved_projects_fk" FOREIGN KEY ("saved_projects_id") REFERENCES "public"."saved_projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_workflow_packs_id_idx" ON "payload_locked_documents_rels" USING btree ("workflow_packs_id");
  CREATE INDEX "payload_locked_documents_rels_workflows_id_idx" ON "payload_locked_documents_rels" USING btree ("workflows_id");
  CREATE INDEX "payload_locked_documents_rels_use_cases_id_idx" ON "payload_locked_documents_rels" USING btree ("use_cases_id");
  CREATE INDEX "payload_locked_documents_rels_personas_id_idx" ON "payload_locked_documents_rels" USING btree ("personas_id");
  CREATE INDEX "payload_locked_documents_rels_project_types_id_idx" ON "payload_locked_documents_rels" USING btree ("project_types_id");
  CREATE INDEX "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX "payload_locked_documents_rels_lessons_id_idx" ON "payload_locked_documents_rels" USING btree ("lessons_id");
  CREATE INDEX "payload_locked_documents_rels_assessments_id_idx" ON "payload_locked_documents_rels" USING btree ("assessments_id");
  CREATE INDEX "payload_locked_documents_rels_roi_assumptions_id_idx" ON "payload_locked_documents_rels" USING btree ("roi_assumptions_id");
  CREATE INDEX "payload_locked_documents_rels_roi_presets_id_idx" ON "payload_locked_documents_rels" USING btree ("roi_presets_id");
  CREATE INDEX "payload_locked_documents_rels_site_planner_templates_id_idx" ON "payload_locked_documents_rels" USING btree ("site_planner_templates_id");
  CREATE INDEX "payload_locked_documents_rels_glossary_terms_id_idx" ON "payload_locked_documents_rels" USING btree ("glossary_terms_id");
  CREATE INDEX "payload_locked_documents_rels_resources_id_idx" ON "payload_locked_documents_rels" USING btree ("resources_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_quote_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("quote_requests_id");
  CREATE INDEX "payload_locked_documents_rels_saved_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("saved_projects_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "workflow_packs_roi_themes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflow_packs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflow_packs_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflows_rdi_layers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "use_cases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "use_cases_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "personas_primary_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "personas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "project_types" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "project_types_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "courses_learning_outcomes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "courses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "courses_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "lessons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "assessments_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "assessments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roi_assumptions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roi_presets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roi_presets_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_planner_templates" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_planner_templates_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_terms" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_terms_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "quote_requests" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "quote_requests_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "saved_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "saved_projects_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "workflow_packs_roi_themes" CASCADE;
  DROP TABLE "workflow_packs" CASCADE;
  DROP TABLE "workflow_packs_rels" CASCADE;
  DROP TABLE "workflows_rdi_layers" CASCADE;
  DROP TABLE "workflows" CASCADE;
  DROP TABLE "use_cases" CASCADE;
  DROP TABLE "use_cases_rels" CASCADE;
  DROP TABLE "personas_primary_questions" CASCADE;
  DROP TABLE "personas" CASCADE;
  DROP TABLE "project_types" CASCADE;
  DROP TABLE "project_types_rels" CASCADE;
  DROP TABLE "courses_learning_outcomes" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "courses_rels" CASCADE;
  DROP TABLE "lessons" CASCADE;
  DROP TABLE "assessments_questions" CASCADE;
  DROP TABLE "assessments" CASCADE;
  DROP TABLE "roi_assumptions" CASCADE;
  DROP TABLE "roi_presets" CASCADE;
  DROP TABLE "roi_presets_rels" CASCADE;
  DROP TABLE "site_planner_templates" CASCADE;
  DROP TABLE "site_planner_templates_rels" CASCADE;
  DROP TABLE "glossary_terms" CASCADE;
  DROP TABLE "glossary_terms_rels" CASCADE;
  DROP TABLE "resources" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "case_studies_rels" CASCADE;
  DROP TABLE "quote_requests" CASCADE;
  DROP TABLE "quote_requests_rels" CASCADE;
  DROP TABLE "saved_projects" CASCADE;
  DROP TABLE "saved_projects_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_workflow_packs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_workflows_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_use_cases_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_personas_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_project_types_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_courses_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_lessons_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_assessments_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_roi_assumptions_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_roi_presets_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_site_planner_templates_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_glossary_terms_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_resources_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_case_studies_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_quote_requests_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_saved_projects_fk";
  
  DROP INDEX "payload_locked_documents_rels_workflow_packs_id_idx";
  DROP INDEX "payload_locked_documents_rels_workflows_id_idx";
  DROP INDEX "payload_locked_documents_rels_use_cases_id_idx";
  DROP INDEX "payload_locked_documents_rels_personas_id_idx";
  DROP INDEX "payload_locked_documents_rels_project_types_id_idx";
  DROP INDEX "payload_locked_documents_rels_courses_id_idx";
  DROP INDEX "payload_locked_documents_rels_lessons_id_idx";
  DROP INDEX "payload_locked_documents_rels_assessments_id_idx";
  DROP INDEX "payload_locked_documents_rels_roi_assumptions_id_idx";
  DROP INDEX "payload_locked_documents_rels_roi_presets_id_idx";
  DROP INDEX "payload_locked_documents_rels_site_planner_templates_id_idx";
  DROP INDEX "payload_locked_documents_rels_glossary_terms_id_idx";
  DROP INDEX "payload_locked_documents_rels_resources_id_idx";
  DROP INDEX "payload_locked_documents_rels_case_studies_id_idx";
  DROP INDEX "payload_locked_documents_rels_quote_requests_id_idx";
  DROP INDEX "payload_locked_documents_rels_saved_projects_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "workflow_packs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "workflows_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "use_cases_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "personas_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "project_types_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "courses_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "lessons_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "assessments_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "roi_assumptions_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "roi_presets_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "site_planner_templates_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "glossary_terms_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "resources_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "case_studies_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "quote_requests_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "saved_projects_id";
  DROP TYPE "public"."enum_workflow_packs_status";
  DROP TYPE "public"."enum_workflows_rdi_layers";
  DROP TYPE "public"."enum_workflows_evercam_role";
  DROP TYPE "public"."enum_workflows_frequency";
  DROP TYPE "public"."enum_workflows_confidence";
  DROP TYPE "public"."enum_workflows_status";
  DROP TYPE "public"."enum_use_cases_status";
  DROP TYPE "public"."enum_courses_level";
  DROP TYPE "public"."enum_courses_status";
  DROP TYPE "public"."enum_lessons_status";
  DROP TYPE "public"."enum_assessments_status";
  DROP TYPE "public"."enum_resources_type";
  DROP TYPE "public"."enum_resources_status";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum_saved_projects_status";`)
}
