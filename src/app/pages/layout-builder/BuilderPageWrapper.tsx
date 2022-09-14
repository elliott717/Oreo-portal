import {PageTitle} from '../../../res/layout/core'
import {BuilderPage} from './BuilderPage'

function BuilderPageWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper
