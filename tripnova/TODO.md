# TODO

- [x] Update `src/utils/tnStorage.js` to add enquiry draft helpers (get/set/clear).
- [x] Refactor `src/pages/Contact.js` to:
  - [x] Hydrate form from enquiry draft on mount (`useEffect`).
  - [x] Persist draft as user types.
  - [x] Submit uses `pushEnquiry` and clears draft.

- [ ] Verify build/tests: run `npm test` and/or `npm run build`.
- [x] Build succeeded (npm run build). Jest test failing appears unrelated to Contact changes (missing react-router-dom in test environment). 

- [ ] Manual QA: refresh during typing (draft persists), submit (enquiry stored + draft cleared).
