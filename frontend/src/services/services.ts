import { DateTimeType } from '../components/organisms/SelectAppointment'
import { webAuth } from '../components/utils/webAuth'
import { patientDetailsType, addressDetailsType } from '../utils/constant'
import API from './API'
export const updatePatientDetails = async (
  selected: number[],
  userId: any
) => {
  const response = await API.get(`/patients/${userId}`)

  for (let i = 0; i < selected.length; i++) {
    response.data.patientDetails[i].selected = true
  }
  await API.put(`/patients/${userId}`, response.data)
}
export const addPatientDetails = async (
  details: patientDetailsType,
  userId: any
) => {
  if (
    details.age === null ||
    details.name === '' ||
    details.gender === '' ||
    details.relation === ''
  ) {
    console.log('Data Invalid')
  } else {
    const response = await API.get(`/patients/${userId}`)
    await response.data.patientDetails.push(details)
    await API.put(`/patients/${userId}`, response.data)
  }
}

export const getPatientDetails = async (userId: any) => {
  const response = await API.get(`/patients/${userId}`)
  return response.data
}

export const addAddressDetails = async (
  details: addressDetailsType,
  userId: any
) => {
  if (
    details.areaDetails !== '' &&
    details.houseDetails !== '' &&
    details.city !== '' &&
    details.zipcode !== ''
  ) {
    const response = await API.get(`/addresses/${userId}`)
    await response.data.addressDetails.push(details)
    await API.put(`/addresses/${userId}`, response.data)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }
}
export const getLabs = async () => {
  let tests: any = []
  await API.get('/labs')
    .then((res) => {
      tests = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  return tests
}
export const getLabsById = async (labID: number) => {
  let labs: any = []
  await API.get(`/labs/${labID}`)
    .then((value) => {
      labs = value.data
    })
    .catch((err) => {
      console.log(err)
    })
  return labs
}
export const getPatientLabDetails = async (patients: any[], labID: number) => {
  let details: any = []
  await getLabsById(labID).then((value) => {
    details.push(value)
  })
  patients.map(async (value) => {
    await getPatientDetails(value).then((patient) => {
      let tempData = {}
      console.log(patient)
      tempData = { ...patient }
      details.push(tempData)
    })
  })
  return details
}

export const getSlotByPatientID = async (patientID: number) => {
  let details: any = []
  await API.get(`/slotsBooked/${patientID}`).then((response) => {
    details = response.data.slots
  })
  return details
}
export const addSlotTime = async (
  slotSelected: DateTimeType,
  userId: any
) => {
  await API.get(`/slotsBooked/${userId}`)
    .then((response) => {
      response.data.slots.push(slotSelected)
      API.put(`/slotsBooked/${userId}`, response.data)
    })
    .catch((err) => console.log(err))
}
export const getAddressDetails = async (userId: any) => {
  let addressData: any[] = []
  await API.get(`/addresses/${userId}`)
    .then((res) => {
      addressData = res.data.addressDetails
    })
    .catch((err) => console.log(err))
  return addressData
}
export const getReports = async (userId: any) => {
  let reports: any = []
  await API.get(`/reports/${userId}`)
    .then((res) => {
      reports = res.data.upcomingReports
    })
    .catch((err) => {
      console.log(err)
    })
  return reports
}
export const addreports = async (userId: any) => {
  const report = {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    isCompleted: false,
  }
  await API.get(`/reports/${userId}`)
    .then((res) => {
      res.data.upcomingReports.push(report)
      API.put(`/reports/${userId}`,res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
