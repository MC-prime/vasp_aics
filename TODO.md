# VASP Code Refactoring Plan

## Phase 1: Extract Components from page.tsx
- [x] Create HeroSection.tsx component
- [x] Create FeaturedProjectsSection.tsx component
- [x] Create AuthModal.tsx component
- [x] Create StudentRegistrationForm.tsx component
- [x] Create InvestorRegistrationForm.tsx component
- [x] Create StudentLoginForm.tsx component
- [x] Create InvestorLoginForm.tsx component
- [x] Update page.tsx to use new components
- [x] Fix missing studentForm state in page.tsx

## Phase 2: Extract Components from visitor/page.tsx
- [x] Create VisitorHeroSection.tsx component
- [x] Create StatsSection.tsx component
- [x] Create SearchFilterSection.tsx component
- [x] Create ProjectCard.tsx component
- [x] Create ProjectGrid.tsx component
- [x] Create CallToActionSection.tsx component
- [x] Update visitor/page.tsx to use new components

## Phase 3: Data and State Management
- [ ] Create data/projects.ts file
- [ ] Create hooks/useAuthModal.ts
- [ ] Create hooks/useFormState.ts

## Phase 4: Assets and Constants
- [ ] Create src/constants/categories.ts
- [ ] Organize assets folder structure

## Phase 5: Cleanup and Fixes
- [ ] Fix or remove broken stu.tsx
- [ ] Remove duplicate footer code in visitor/page.tsx
- [ ] Test all components for functionality

## Phase 6: Refactor Student Page
- [x] Extract Sidebar component (done)
- [x] Extract Overview section component
- [x] Extract Profile Settings component
- [x] Extract Projects section component
- [x] Extract Opportunities section component
- [x] Extract Discussions section component
- [x] Extract General Settings component
- [x] Update student/page.tsx to use new components
