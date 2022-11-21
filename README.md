# evolution-bootcamp-cucumber-home-task


## Tested pages
1. https://the-internet.herokuapp.com/add_remove_elements/
2. https://the-internet.herokuapp.com/checkboxes
3. https://the-internet.herokuapp.com/key_presses
4. https://the-internet.herokuapp.com/login
5. https://the-internet.herokuapp.com/hovers

### File structure example:

```
- features
   - add_remove_elements.feature
   - checkboxes.feature
   - key_presses.feature
   - hovers.feature
   - step-definitions
      - common_steps.js
      - add_remove_elements.js
      - ...
```

## Tests
- Run `yarn install` to install all dependencies.
- Run `yarn wdio` to run your tests.
- The console output will show you the result.