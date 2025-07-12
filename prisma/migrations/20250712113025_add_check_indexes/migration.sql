-- CreateIndex
CREATE INDEX "checks_checkedAt_idx" ON "checks"("checkedAt");

-- CreateIndex
CREATE INDEX "checks_status_checkedAt_idx" ON "checks"("status", "checkedAt");
