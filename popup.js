document.getElementById("proofreadBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Processing...";

  try {
    const session = await ai.languageModel.create({
      model: "proofreader"
    });

    const result = await session.proofread(text);
    outputDiv.textContent = result.output || "No corrections needed.";
  } catch (err) {
    console.error(err);
    outputDiv.textContent = "⚠️ This feature may require the Chrome Built-in AI preview to be enabled.";
  }
});
