-- Deliberately invalid: this branch exists to test how a platform handles a failing migration.
ALTER TABLE "DoesNotExist" ADD COLUMN "nope" TEXT;
