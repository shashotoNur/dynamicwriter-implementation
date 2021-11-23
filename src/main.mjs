import dynamicwriter from 'dynamicwriter';

(async () => {
    await writer('logging first statement...\n', 100);

    await dynamicwriter('logging second statement dynamically...\n', [" ", 50], ["statement", 400], ["end//", 10]);

    await dynamicwriter('logging third statement with a slow ending...', [" ", 100], ["with", 10], ["slow", 400]);
})();
