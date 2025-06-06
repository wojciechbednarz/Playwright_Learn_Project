function successCallback(result) {
  console.log('Audio file ready at url: $(result)');
}

function failureCallback(result) {
  console.error('Error generating file: $(error)');
}

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
