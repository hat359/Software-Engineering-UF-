package codeten

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"

	googleapi "google.golang.org/api/googleapi"
	internal "google.golang.org/api/internal"
	gensupport "google.golang.org/api/internal/gensupport"
	option "google.golang.org/api/option"
	internaloption "google.golang.org/api/option/internaloption"
	htransport "google.golang.org/api/transport/http"
)

const apiId = "healthcare:v1"
const apiName = "healthcare"
const apiVersion = "v1"
const basePath = "https://healthcare.googleapis.com/"
const mtlsBasePath = "https://healthcare.mtls.googleapis.com/"

type Service struct {
	client    *http.Client
	BasePath  string
	UserAgent string
	Projects  *ProjectsService
}

type ProjectsService struct {
	s *Service
	Locations *ProjectsLocationsService
}

type ProjectsLocationsService struct {
	s *Service
	Datasets *ProjectsLocationsDatasetsService
	Services *ProjectsLocationsServicesService
}

func NewService(ctx context.Context, opts ...option.ClientOption) (*Service, error) {
	scopesOption := internaloption.WithDefaultScopes(
		"https://www.googleapis.com/auth/cloud-platform",
	)
	opts = append([]option.ClientOption{scopesOption}, opts...)
	opts = append(opts, internaloption.WithDefaultEndpoint(basePath))
	opts = append(opts, internaloption.WithDefaultMTLSEndpoint(mtlsBasePath))
	client, endpoint, err := htransport.NewClient(ctx, opts...)
	if err != nil {
		return nil, err
	}
	s, err := New(client)
	if err != nil {
		return nil, err
	}
	if endpoint != "" {
		s.BasePath = endpoint
	}
	return s, nil
}

func NewProjectsLocationsDatasetsService(s *Service) *ProjectsLocationsDatasetsService {
	rs := &ProjectsLocationsDatasetsService{s: s}
	rs.ConsentStores = NewProjectsLocationsDatasetsConsentStoresService(s)
	rs.DicomStores = NewProjectsLocationsDatasetsDicomStoresService(s)
	rs.FhirStores = NewProjectsLocationsDatasetsFhirStoresService(s)
	rs.Hl7V2Stores = NewProjectsLocationsDatasetsHl7V2StoresService(s)
	rs.Operations = NewProjectsLocationsDatasetsOperationsService(s)
	return rs
}

func NewProjectsLocationsDatasetsConsentStoresService(s *Service) *ProjectsLocationsDatasetsConsentStoresService {
	rs := &ProjectsLocationsDatasetsConsentStoresService{s: s}
	rs.AttributeDefinitions = NewProjectsLocationsDatasetsConsentStoresAttributeDefinitionsService(s)
	rs.ConsentArtifacts = NewProjectsLocationsDatasetsConsentStoresConsentArtifactsService(s)
	rs.Consents = NewProjectsLocationsDatasetsConsentStoresConsentsService(s)
	rs.UserDataMappings = NewProjectsLocationsDatasetsConsentStoresUserDataMappingsService(s)
	return rs
}

