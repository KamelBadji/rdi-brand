import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_course_progress_status" AS ENUM('completed');
  ALTER TYPE "public"."enum_workflows_evercam_role" ADD VALUE 'Aspirational' BEFORE 'None';
  CREATE TABLE "workflows_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"order" numeric,
  	"description" varchar,
  	"is_inferred" boolean DEFAULT false
  );
  
  CREATE TABLE "workflows_evidence" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"source" varchar,
  	"is_inferred" boolean DEFAULT false
  );
  
  CREATE TABLE "workflows_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "workflows_flags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"description" varchar,
  	"resolved" boolean DEFAULT false
  );
  
  CREATE TABLE "learners_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "learners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"company" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "course_progress" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"learner_id" integer NOT NULL,
  	"course_slug" varchar NOT NULL,
  	"lesson_slug" varchar NOT NULL,
  	"status" "enum_course_progress_status" DEFAULT 'completed' NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "workflows" ADD COLUMN "source_id" numeric;
  ALTER TABLE "workflows" ADD COLUMN "evercam_role_description" varchar;
  ALTER TABLE "workflows" ADD COLUMN "trigger" varchar;
  ALTER TABLE "workflows" ADD COLUMN "activity" varchar;
  ALTER TABLE "workflows" ADD COLUMN "conclusion" varchar;
  ALTER TABLE "workflows" ADD COLUMN "evidence_count" numeric;
  ALTER TABLE "workflows" ADD COLUMN "has_cost_model" boolean DEFAULT false;
  ALTER TABLE "workflows" ADD COLUMN "is_active" boolean DEFAULT true;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "learners_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "course_progress_id" integer;
  ALTER TABLE "payload_preferences_rels" ADD COLUMN "learners_id" integer;
  ALTER TABLE "workflows_steps" ADD CONSTRAINT "workflows_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflows_evidence" ADD CONSTRAINT "workflows_evidence_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflows_tags" ADD CONSTRAINT "workflows_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "workflows_flags" ADD CONSTRAINT "workflows_flags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."workflows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "learners_sessions" ADD CONSTRAINT "learners_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."learners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_progress" ADD CONSTRAINT "course_progress_learner_id_learners_id_fk" FOREIGN KEY ("learner_id") REFERENCES "public"."learners"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "workflows_steps_order_idx" ON "workflows_steps" USING btree ("_order");
  CREATE INDEX "workflows_steps_parent_id_idx" ON "workflows_steps" USING btree ("_parent_id");
  CREATE INDEX "workflows_evidence_order_idx" ON "workflows_evidence" USING btree ("_order");
  CREATE INDEX "workflows_evidence_parent_id_idx" ON "workflows_evidence" USING btree ("_parent_id");
  CREATE INDEX "workflows_tags_order_idx" ON "workflows_tags" USING btree ("_order");
  CREATE INDEX "workflows_tags_parent_id_idx" ON "workflows_tags" USING btree ("_parent_id");
  CREATE INDEX "workflows_flags_order_idx" ON "workflows_flags" USING btree ("_order");
  CREATE INDEX "workflows_flags_parent_id_idx" ON "workflows_flags" USING btree ("_parent_id");
  CREATE INDEX "learners_sessions_order_idx" ON "learners_sessions" USING btree ("_order");
  CREATE INDEX "learners_sessions_parent_id_idx" ON "learners_sessions" USING btree ("_parent_id");
  CREATE INDEX "learners_updated_at_idx" ON "learners" USING btree ("updated_at");
  CREATE INDEX "learners_created_at_idx" ON "learners" USING btree ("created_at");
  CREATE UNIQUE INDEX "learners_email_idx" ON "learners" USING btree ("email");
  CREATE INDEX "course_progress_learner_idx" ON "course_progress" USING btree ("learner_id");
  CREATE INDEX "course_progress_updated_at_idx" ON "course_progress" USING btree ("updated_at");
  CREATE INDEX "course_progress_created_at_idx" ON "course_progress" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_learners_fk" FOREIGN KEY ("learners_id") REFERENCES "public"."learners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_course_progress_fk" FOREIGN KEY ("course_progress_id") REFERENCES "public"."course_progress"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_learners_fk" FOREIGN KEY ("learners_id") REFERENCES "public"."learners"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_learners_id_idx" ON "payload_locked_documents_rels" USING btree ("learners_id");
  CREATE INDEX "payload_locked_documents_rels_course_progress_id_idx" ON "payload_locked_documents_rels" USING btree ("course_progress_id");
  CREATE INDEX "payload_preferences_rels_learners_id_idx" ON "payload_preferences_rels" USING btree ("learners_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "workflows_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflows_evidence" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflows_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "workflows_flags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "learners_sessions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "learners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "course_progress" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "workflows_steps" CASCADE;
  DROP TABLE "workflows_evidence" CASCADE;
  DROP TABLE "workflows_tags" CASCADE;
  DROP TABLE "workflows_flags" CASCADE;
  DROP TABLE "learners_sessions" CASCADE;
  DROP TABLE "learners" CASCADE;
  DROP TABLE "course_progress" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_learners_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_course_progress_fk";
  
  ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_learners_fk";
  
  ALTER TABLE "workflows" ALTER COLUMN "evercam_role" SET DATA TYPE text;
  DROP TYPE "public"."enum_workflows_evercam_role";
  CREATE TYPE "public"."enum_workflows_evercam_role" AS ENUM('Replacement', 'Supporting', 'Supporting Replacement', 'None');
  ALTER TABLE "workflows" ALTER COLUMN "evercam_role" SET DATA TYPE "public"."enum_workflows_evercam_role" USING "evercam_role"::"public"."enum_workflows_evercam_role";
  DROP INDEX "payload_locked_documents_rels_learners_id_idx";
  DROP INDEX "payload_locked_documents_rels_course_progress_id_idx";
  DROP INDEX "payload_preferences_rels_learners_id_idx";
  ALTER TABLE "workflows" DROP COLUMN "source_id";
  ALTER TABLE "workflows" DROP COLUMN "evercam_role_description";
  ALTER TABLE "workflows" DROP COLUMN "trigger";
  ALTER TABLE "workflows" DROP COLUMN "activity";
  ALTER TABLE "workflows" DROP COLUMN "conclusion";
  ALTER TABLE "workflows" DROP COLUMN "evidence_count";
  ALTER TABLE "workflows" DROP COLUMN "has_cost_model";
  ALTER TABLE "workflows" DROP COLUMN "is_active";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "learners_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "course_progress_id";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN "learners_id";
  DROP TYPE "public"."enum_course_progress_status";`)
}
