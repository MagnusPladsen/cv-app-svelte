<script lang=ts>

</script>

<div class="flex flex-col gap-2">
    <p class="text-xl ">Education</p>
    <div class=" border-b-[0.5px] border-white w-full mb-4" ></div>

    {education.map((education, index) => (
      <div key={index} class="flex flex-col gap-2">
        <FormInput
          label="School name"
          name={`education.${index}.schoolName`}
          class="w-full"
        />

        <FormDateRangePicker
          label="School duration"
          name={`education.${index}.schoolDuration`}
        />

        {index > 0 && (
          <Button
            size="sm"
            variant="destructive"
            onClick={() => removeEducation(index)}
          >
            <X class="w-4 h-4" />
            Remove
          </Button>
        )}
      </div>
    ))}

    <Button variant="outline" onClick={addEducation} class="mt-4">
      <Plus class="w-4 h-4" />
      Add education
    </Button>
  </div>